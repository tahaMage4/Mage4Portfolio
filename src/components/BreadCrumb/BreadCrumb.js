import React from "react"
import { Link } from "gatsby"
// import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) =>
  console.log(
    "parent",
    parent
  )(
    // <Wrapper>
    <div>
      {console.log(parent)}
      <Link to="/">
        <span>Home</span>
      </Link>
      <span className="divider">/</span>
      {parent ? (
        <>
          <Link to={parent.uri}>
            <span dangerouslySetInnerHTML={{ __html: parent.title }} />
          </Link>
          <span className="divider">/</span>
        </>
      ) : null}
    </div>
  )
// </Wrapper>/

export default BreadCrumb
