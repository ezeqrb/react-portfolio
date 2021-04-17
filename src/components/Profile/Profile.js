import { React } from 'react'
import './Profile.css'
import  { FaGithub , FaSlack ,   FaLinkedinIn , FaDiscord } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import Typewriter from 'typewriter-effect';



export default function Profile() {

  return (
    <div className="Profile">
      
      
      <div className="tarjeta">
        <div><img src='./newPortfolio.jpg' alt="foto perfil zeker" className="foto"/></div>
        <div className="name">
          <h1 className="tittle anim-typewriter"> Ezequiel RB </h1>
        </div>
        <div className="job">
          <h4 className="crimeson"><Typewriter
            options={{
              strings: ['Fullstack', 'Web developer',  'NodeJS', 'ReactJS', 'JavaScript'],
              autoStart: true,
              loop: true,
            }}
            />
        </h4>
        </div>
        <div className="social"> 
        <a href="https://github.com/ezeqrb" target="_blank" rel="noreferrer"> <FaGithub size="1.2em" className="social-icons"/></a>
        <a href="https://github.com/ezeqrb" target="_blank" rel="noreferrer"> <FaSlack size="1.2em"className="social-icons"/></a>
        <a href="https://www.linkedin.com/in/eromerobertani/" target="_blank" rel="noreferrer"> <FaLinkedinIn size="1.2em"className="social-icons"/></a>
        <a href="https://github.com/ezeqrb" target="_blank" rel="noreferrer"> <FaDiscord size="1.2em"className="social-icons"/></a>
        </div>
      </div>
      <div className="divider div-transparent"></div>
      <div className="botones">
       <div className="download"><a href='/cv-en.pdf' download>Download CV</a></div>
        
        <NavLink className="NavLink" to="/contact" activeClassName="selected">Contact Me</NavLink>
        
      </div>   
    </div>
);
}
 
  