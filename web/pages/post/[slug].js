import groq from 'groq';
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'

import CodeComponent from '../../src/components/CodeComponent';

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "authorImage": author->image,
  "categories": categories[]->title,
  body,
  mainImage
}`

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

// This is the stuff that goes inside the post.
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    },
    code: CodeComponent
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )
  console.log('paths', paths);
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

const Post = ({ post }) => {
  const { title = 'Missing title', name = 'Missing name', mainImage, categories, authorImage, body = [] } = post || {};

  const myImage = urlFor(mainImage).width(320).height(240).fit('max').auto('format');

  console.log('myImage', myImage);

  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
              alt={`${name}'s picture`}
          />
        </div>
      )}
            {mainImage && (
        <div>
          <p>Default implementation</p>
          <img
            src={urlFor(mainImage)
              .width(50)
              .url()}
              alt={`${name}'s picture`}
          />
          <p>Second idea</p>
        <img src={myImage} alt="" />
        </div>
      )}
            <PortableText
        value={body}
        components={ptComponents}
      />
    </article>
  )
}

export default Post;