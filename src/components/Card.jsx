import Info from './Info'
import About from './About'  
import Skills from './Skills'
import Footer from './Footer'
import './Card.css'
import React from "react"

function Card() {
  return (
    <>
    <div className="Card--Container">
      <Info/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
    </>
    )
}

export default Card;
