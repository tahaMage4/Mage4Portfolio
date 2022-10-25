import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from "./layout"

const Header = (props) => {
  const list = useStaticQuery(graphql`
    query {
      wpMenu {
        id
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `)

  // const {
  //   wpMenu: {
  //     menuItems: { nodes },
  //   },
  // } = props.data
  // console.log("data", props.data)
  // console.log("nodes", nodes)
  return (
    <>
      <h1>{list.nodes}</h1>
      {/* {Object.values(nodes).map((menuItem) => (
        <Link to={menuItem.url.replace("index.php/", "")}>
          <ul>
            <li>
              <span>{menuItem.label}</span>
            </li>
          </ul>
        </Link>
      ))} */}
    </>
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
export default Header
