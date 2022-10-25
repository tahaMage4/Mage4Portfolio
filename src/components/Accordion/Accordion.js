import React from "react"
import "./Accordion.scss"

const Accordion = () => {
  return (
    <>
      <section class="sec-2-col">
        <div class="item">
          <h2>
            Eum ipsam laborum deleniti
            <span>velit pariatur architecto aut nihil</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>
          <div class="accordion">
            <div class="acc-box">
              <a href="">Accordion 1</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                suscipit, perferendis excepturi et ut reiciendis?
              </p>
            </div>
            <div class="acc-box">
              <a href="">Accordion 2</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                suscipit, perferendis excepturi et ut reiciendis?
              </p>
            </div>
            <div class="acc-box">
              <a href="">Accordion 3</a>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus libero vero sit dolorem nesciunt repudiandae
                reiciendis architecto possimus, dolore quibusdam, aperiam, animi
                esse labore nobis.
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <img
            src="img/banner:http://webostics.com/custom-theme-1/img/banner_right-2.png"
            alt="banner_right-2"
          />
        </div>
      </section>
    </>
  )
}

export default Accordion
