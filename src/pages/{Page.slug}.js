import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import { Container, Box, Heading, Subhead } from "../components/UI/ui"

export default function Page(props) {
  const { page } = props.data
  console.log("page-slug", props.data)

  return (
    <Layout {...page}>
      <Box paddingY={5}>
        <Container width="narrow">
          <h1 style={{ color: "#fff" }}>{page.title}</h1>
          <h3 style={{ color: "#fff" }}>{page.id}</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
