import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import React from "react"
import avatar from '../assets/avatar.jpg';
import './Info.css';

function Info() {
  return (
    <>
    <div className="Info--Container">
        <img src={avatar} alt="avatar" className="Info--Image"/>
        <h1 className="Info--Name">Liam Le</h1>
        <h4 className="Info--Position">Full-Stack Developer</h4>
        <h4 className="Info--Website">liamlecs.dev</h4>
        <div class="Info--Button--Container">
          <a href="mailto:liamlecs@gmail.com"><button className="Info--Button Info--Button--Email">
            <img className="Info--Button--Icon" src={mail} alt="mail"/>Email</button></a>
          <a href="https://www.linkedin.com/in/liamlecs/"><button className="Info--Button Info--Button--LinkedIn">
            <img className="Info--Button--Icon"src={linkedin} alt="linkedin"/>LinkedIn</button></a>
        </div>
    </div>
    </>
  )
}

export default Info;