import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
// import * as sections from "../components/sections"
// import Fallback from "../components/fallback"
import { Container, Box, Heading, Link } from "../components/UI/ui"
import ServicesProvide from "../components/ServicesProvide/ServicesProvide"
import Banner from "../components/Hero/Hero"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Accordion from "../components/Accordion/Accordion"

import "../style/main/main.css"

export default function Homepage(props) {
  // const {
  //   wpMenu: {
  //     menuItems: { nodes },
  //   },
  // } = props.data
  // console.log("props.data", props.data)
  // console.log("props.nodes", nodes)
  return (
    <Layout>
      <Container width="narrow">
        <Banner />
        <Accordion />
        <ServicesProvide />
        <LatestBlogPost />
      </Container>
    </Layout>
    // <Layout>
    //   <Box paddingY={5}>
    //     <Container width="narrow">
    //       {Object.values(nodes).map((menuItem) => (
    //         <Link to={menuItem.url.replace("index.php/", "")}>
    //           <ul>
    //             <li>
    //               <span>{menuItem.label}</span>
    //             </li>
    //           </ul>
    //         </Link>
    //       ))}
    //     </Container>
    //   </Box>
    // </Layout>
  )
}

// export const query = graphql`
//   query {
//     wpMenu {
//       id
//       menuItems {
//         nodes {
//           id
//           label
//           url
//         }
//       }
//     }
//   }
// `
