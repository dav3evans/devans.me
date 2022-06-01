// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'mfgmm5gx', // you can find this in sanity.json
  apiVersion: '2022-06-01',
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})