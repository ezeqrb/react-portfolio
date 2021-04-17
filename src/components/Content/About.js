import React from 'react'
import './Card.css'
import './About.css'
import { motion } from "framer-motion"
import { BsFillTerminalFill ,BsFillImageFill, BsFillFlagFill ,
         BsFillMicFill , BsTools, BsMoon , BsSpeaker, BsGraphUp, BsFillFunnelFill } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'



export default function About() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
 

    return (
        <motion.div
        initial={{ opacity: 0 , x: -400}}
        animate={{opacity: 1, x:0 }}
        exit={{ opacity: 0, x: -400}}
        >
        <div className={ isDesktopOrLaptop ? "Card" : "Card-movile" }>

            <div className="titulo">
            
            <h2>About Me</h2>

            </div>
            <div className="divider div-transparent"></div>
            <div className="container-about">
                <div className="box">
                 <h4 className="crimeson">Hello! I’m Zeker.</h4>
                 <p>Web developer from ARG, Bs As.
                I have rich experience in web site design and building.
                Up to speed new techs
                </p>
                </div>

                <div className="box" id="dats">
                    <div className="fila">
                        <h4 className="crimeson">Age</h4>
                        <div >25</div>
                    </div>
                    
                    <div className="fila" >
                        <h4 className="crimeson"> Residence</h4>
                        <div>ARG</div>
                    </div>
                   
                    <div className="fila" >
                        <h4 className="crimeson">FreeLance</h4>
                        <div> Not Available</div>
                    </div>
                    
                    <div className="fila" >
                        <h4 className="crimeson">Address</h4>
                        <div >CABA, Arg</div>
                    </div>
                </div>
            </div>
            <div className="titulo"><h2>What I Do</h2></div>
            <div className="divider div-transparent"></div>
            <div className="container-about">
                <div className="box2">
                    <div className=""><BsFillTerminalFill size="2rem"  className="bigIcons" /></div>
                    <div className="subTittle" ><h3>Web Development</h3></div>
                    <div><p className="paragraph-center">Fullstack web developer, currently working with NodeJs and ReactJs.</p></div>
                </div>
                <div className="box2">
                    <div><BsFillImageFill size="2rem"  className="bigIcons" /></div>
                    <div className="subTittle"><h3>Web Designer</h3></div>
                    <div><p className="paragraph-center">Modern and mobile-ready website that will help you reach all of your marketing.</p></div>
                </div>
                <div className="box2">
                    <div><BsFillFunnelFill size="2rem"  className="bigIcons" /></div>
                    <div className="subTittle" ><h3>Testing</h3></div>
                    <div><p className="paragraph-center">Begining test some applications, start with udemy courses.</p></div>
                </div>
                <div className="box2">
                    <div><BsFillFlagFill size="2rem"  className="bigIcons" /></div>
                    <div className="subTittle" ><h3>Digital Marketing</h3></div>
                    <div><p className="paragraph-center">Develop digital marketing strategies focused on business needs.</p></div>
                </div>
            </div>
            <div className="titulo"><h2>Fun Facts</h2></div>
            <div className="divider div-transparent"></div>
            <div className="container-about">
                <div className="smallBox">
                    <div><BsTools size="1.8rem" color="#dc143c"/></div>
                    <div><h4>PC tech repair</h4></div>
                </div>
                <div className="smallBox">
                    <div><BsFillMicFill size="1.8rem" color="#dc143c"/></div>
                    <div><h4>Podcast radio show</h4></div>
                </div>
                <div className="smallBox">
                    <div><BsMoon size="1.8rem" color="#dc143c"/></div>
                    <div><h4>Night worker</h4></div>
                </div>
                <div className="smallBox">
                    <div><BsSpeaker size="1.8rem" color="#dc143c"/></div>
                    <div><h4>Producer</h4></div>
                </div>
                <div className="smallBox">
                    <div><BsGraphUp size="1.8rem" color="#dc143c"/></div>
                    <div><h4>Crypto investments</h4></div>
                </div>
            </div>
           
        </div>
        </motion.div>
  );
  }
   