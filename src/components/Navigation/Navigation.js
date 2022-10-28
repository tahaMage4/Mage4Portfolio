import React from "react"
import { Link } from "gatsby"
// import { Wrapper } from "./Navigation.styles"
import "./Navigation.scss"

const Navigation = ({ menu }) => (
  //   <Wrapper>
  <div>
    <header>
      <Link to="/">
        <div className="logo">
          <h2>MAGE 4</h2>
        </div>
      </Link>
      <nav>
        <i class="fa-solid fa-bars mobile"></i>
        <ul>
          <i class="fa-solid fa-xmark mobile"></i>
          {menu.map((mainItem) =>
            !mainItem.parentId ? (
              <li key={mainItem.id}>
                <Link
                  to={mainItem.url.replace("index.php/", "")}
                  activeClassName="nav-active"
                >
                  {mainItem.label}
                  {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
                </Link>
                {mainItem.childItems.nodes.length !== 0 ? (
                  <ul>
                    {mainItem.childItems.nodes.map((childItem) => (
                      <li key={childItem.id}>
                        <Link to={childItem.url} activeClassName="nav-active">
                          {childItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : null
          )}
          <li>
            <Link to="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <a class="btn">Get Started</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  //   </Wrapper>
)

export default Navigation
