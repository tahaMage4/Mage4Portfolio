import * as React from "react"
// import Header from "./header"
import Footer from "../Footer/footer"
// import Head from "../head"
import "../../styles.css"
import Header1 from "../Header/Header"
import SEO from "../Seo/seo"

const Layout = (props) => {
  return (
    <>
      <SEO {...props} />
      <Header1 />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
