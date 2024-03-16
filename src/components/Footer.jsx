import React from "react"
import "./Footer.css"
import GitHub from "../assets/github.png"
import Resume from "../assets/resume.jpg"

function Footer() {
  return (
    <>
    <div className="Footer--Container">
      <a href="https://github.com/liamlecs"><img class="Footer--Icon Footer--Icon--Github" src={GitHub}/>
      </a>
      <a href="https://drive.google.com/file/d/1H6C-8zJ4VUWggUCFuNJXHV1T8tsmQ2Yy/view?usp=sharing"><img class="Footer--Icon Footer--Icon--Resume" src={Resume}/></a>
    </div>
    </>
  )
}

export default Footer;
