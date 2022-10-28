import React from "react"
// import { useFootermenuQuery } from "../../hooks/useFootermenuQuery"
import "./footer.scss"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"

const Footer = () => {
  const { menu } = useMenuQuery
  console.log("footer", menu)
  return (
    <footer>
      <div class="copyright">
        <i class="fa fa-copyright">
          <span>Tell us about your project</span>
        </i>
        {/* {menu.map((mainItem) =>
          !mainItem.parentId ? (
            <li key={mainItem.id}>
              <Link
                to={mainItem.url.replace("index.php/", "")}
                activeClassName="footer-active"
              >
                {mainItem.label}
                {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
              </Link>
              {mainItem.childItems.nodes.length !== 0 ? (
                <ul>
                  {mainItem.childItems.nodes.map((childItem) => (
                    <li key={childItem.id}>
                      <Link to={childItem.url} activeClassName="footer-active">
                        {childItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ) : null
        )} */}

        <span>
          Get in touch with our team. Send us an email contact@mage4.com
        </span>
      </div>
    </footer>
  )
}

export default Footer
