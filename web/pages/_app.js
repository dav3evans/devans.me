import './styles.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// This file is used when extending Next apps, and is the way to add a global stylesheet.