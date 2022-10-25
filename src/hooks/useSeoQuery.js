import { useStaticQuery, graphql } from "gatsby"

export const useSeoQuery = () => {
  const data = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return data
}
