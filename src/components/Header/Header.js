import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
// import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import BrandLogo from "../Logo/brand-logo"
// import { Wrapper, Content } from "./Header.styles"
import "./header.css"
import Layout from "../Layout/layout"

const Header1 = () => {
  const { site, menu } = useMenuQuery()

  return (
    //  <Wrapper>
    // <Content>
    // <Layout>
    <div className="header-main">
      {/* <img src={Logo} alt={site.siteMetadata.title} /> */}

      <Navigation menu={menu.menuItems.nodes} />
    </div>
    // </Layout>
    // </Content>
    //  </Wrapper>
  )
}

export default Header1
