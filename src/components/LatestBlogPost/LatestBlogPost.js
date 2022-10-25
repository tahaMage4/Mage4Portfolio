import React from "react"
import { Link } from "gatsby"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
// import { Wrapper } from "./LatesBlogPost.styles"
import "./LatestBlogPost.scss"
import { Container } from "../UI/ui"

const LatestBlogPost = () => {
  const data = useLatestBlogPost()
  console.log("blog post", data)

  return (
    //  <Wrapper>
    <div className="wrapper">
      <h1>Latest Blog Post</h1>
      <h4>{data.allWpPost.edges[0].node.title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.excerpt,
        }}
      />
      <Link to={`/blog${data.allWpPost.edges[0].node.uri}`}>
        <button className="read_more">
          <h5>Read More</h5>
        </button>
      </Link>
      {/* </Wrapper> */}
    </div>
  )
}

export default LatestBlogPost
