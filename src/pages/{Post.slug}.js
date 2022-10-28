// import * as React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout/layout"
// import { Container, Box, Heading, Subhead } from "../components/UI/ui"

// export default function Page(props) {
//   const { page } = props.data
//   console.log("page-slug", props.data)

//   return (
//     <Layout {...page}>
//       <Box paddingY={5}>
//         <Container width="narrow">
//           <h1 style={{ color: "#fff" }}>{posts.title}</h1>
//           <h3 style={{ color: "#fff" }}>{posts.id}</h3>

//           <div
//             dangerouslySetInnerHTML={{
//               __html: posts.html,
//             }}
//           />
//         </Container>
//       </Box>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query PostContent($id: String!) {
//     post(id: { eq: $id }) {
//       edges {
//         node {
//           id
//           title
//           uri
//           video {
//             videoSource
//             videoUrl
//           }
//           seo {
//             metaDesc
//             title
//           }
//           html
//         }
//       }
//     }
//   }
// `
