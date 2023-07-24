const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'c55cpfi0sfm7',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'h8Pu5FPvfMP4hVbBGo8-mcGkOQcj8xaKUa6L6e0svt8',
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
// client
//   .getEntry('7hxil60oQ9GUQkIVa5IY2Z')
//   .then((entry) => console.log(entry))
//   .catch((err) => console.log(err))

client
  .getEntries()
  .then((entry) => console.log(entry.items))
  .catch((err) => console.log(err))