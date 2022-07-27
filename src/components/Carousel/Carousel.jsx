import React from 'react'
import slider from "./sliderUno.jpg"
import slider2 from "./sliderDos.jpg"
import slider3 from "./sliderTres.jpg"

function Carousel() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide mb-5" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slider} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={slider2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={slider3} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
    </div>
    </>
  )
}

export default Carousel