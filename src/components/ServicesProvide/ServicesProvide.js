import React from "react"
import "./ServicesProvide.scss"
import services from "./ServiceProvider.config"

const ServicesProvide = () => {
  return (
    <>
      <section className="services">
        {/* <h2 className="left-to-right">Services</h2> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero
          autem! Laudantium eius, placeat tempora, suscipit itaque est in
          voluptatibus odit dolore optio saepe quia, doloremque iusto? Aut,
          cumque neque?
        </p> */}
        <div className="box-4">
          {services.map((servicer) => (
            <div key={servicer.id} className="box ">
              <div className="content">
                <div className="icon">
                  <i className="bx bx-code-alt"></i>
                </div>
                <h3>{servicer.tittle}</h3>
                <p>{servicer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesProvide
