import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import "./Hero.scss"
// import Img from "GatsbyImage"

const Banner = () => {
  return (
    <>
      <section class="banner">
        <div class="box">
          <div class="content">
            <h1>
              Better Solutions For<span class="d-block">Your Business</span>
            </h1>
            <p>
              We are team of talented designers making
              <span class="d-block">website with our own css and js</span>
            </p>
            <div class="btns">
              <a href="#!" class="btn">
                <span>Get Started</span>
              </a>
              <a href="#!" class="btn video">
                <i class="fa-regular fa-circle-play"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <img
            src="http://webostics.com/custom-theme-1/img/banner_right.png"
            alt="banner_right"
          />
        </div>
      </section>
    </>
  )
}

export default Banner
