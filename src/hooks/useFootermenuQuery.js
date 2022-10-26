import { useStaticQuery, graphql } from "gatsby"

export const useFootermenuQuery = () => {
  const footerdata = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      footer: wpMenu(name: { eq: "footer_menu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `)

  return footerdata
}
