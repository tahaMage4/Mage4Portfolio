import React from "react"
import { useFootermenuQuery } from "../../hooks/useFootermenuQuery"
import "./footer.scss"
import { Link } from "gatsby"

const Footer = () => {
  const { footer, site } = useFootermenuQuery
  console.log("footer", footer, site)
  return (
    <footer>
      <div class="copyright">
        <i class="fa fa-copyright">
          <span>Mage4</span>
        </i>
        {/* {footer.map((mainItem) =>
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
        {/* <span>Design by Saad & Develop by Taha Ahmed </span> */}
        <span>
          @copyright By
          <a> Mage4</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
