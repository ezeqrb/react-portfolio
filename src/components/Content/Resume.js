import React from 'react'
import './Card.css'
import './Resume.css'
import { motion } from "framer-motion"
import { BsFillBriefcaseFill, BsBookHalf , BsFillImageFill , BsFillTerminalFill } from 'react-icons/bs'
import {DiMongodb , DiMysql, DiReact, DiNodejs, DiJavascript1, DiHtml5, DiCss3, DiGoogleAnalytics , DiPhp, DiVisualstudio, DiPython} from 'react-icons/di'
import { useMediaQuery } from 'react-responsive'



export default function Resume() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isMobile = useMediaQuery({
        query: '(max-device-width: 1223px)'
      })

    return (
        <motion.div
        initial={{ opacity: 0 , x: -400}}
        animate={{opacity: 1, x:0 }}
        exit={{ opacity: 0, x: -400}}
        >
            <div className={ isDesktopOrLaptop ? "Card" : "Card-movile" }>
                <div className="titulo">
                    <h1>Resume</h1>
                </div>
                <div className="divider div-transparent"></div>
                
                <div className="container-resume">
                <div className="section">
                    <div className="box">
                        <div className="tittle"> <BsFillBriefcaseFill size="2.2rem" color="#dc143c" />EXPÉRIENCE</div>
                        <div className="divider div-transparent"></div>
                        <br/>
                        <div className="fila"> 
                            <div > <div className="btn">2020-2021</div> <h3> Developer</h3> <small>DH Project</small></div>
                            <div> <img className ="logos" src="/dh.png" alt="Digital House Logo academy fullstack " />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Collaborate with development teams on the Digital house course project.</p> 
                        </div>

                       
                    </div>

                    <div className="box">
                        <div className="fila"> 
                            <div > <div className="btn">2013-2015</div> <h3> Developer </h3> <small>Ideas Conectadas</small></div>
                            <div> <img className ="logos" src="/logo1.png" alt="" />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Collaborate with development and designer team to made landing pages.</p> 
                        </div>
                        
                    </div>
                                 
                </div>
                
                <div className="section">
                   
                   
                    <div className="box">
                        <div className="tittle"> <BsBookHalf size="2.2rem" color="#dc143c" />EDUCATION</div>
                        <div className="divider div-transparent"></div>
                        <br/>
                        <div className="fila"> 
                            <div > <div className="btn">2020-2021</div> <h3>Full Stack </h3> <small>Digital House </small></div>
                            <div> <img className ="logos" src="/dh.png" alt="Digital House Logo academy fullstack " />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Full stack web developer Course at Digital House code academy</p> 
                        </div>
                    </div>  


                    
                    
                    <div className="box">
                        <div className="fila"> 
                            <div > <div className="btn">2020-2025</div> <h3> Economic CS </h3> <small>UBA </small></div>
                            <div> <img className ="logos" src="/uba.png" alt="Digital House Logo academy fullstack " />  </div>
                        </div>
                        <div className="paragraph"> 
                            <p>Bachelor's Degree in Economic Science UBA, University of Buenos Aires</p> 
                        </div>
                    </div>                
                </div>
                </div>
               

                
                <div className="titulo">
                    <h1>Skills</h1>
                </div>
                <div className="divider div-transparent"></div>
                <div className="container-resume">
                    
                        <div className="box">
                            <div className="tittle"> <BsFillImageFill size="2.2rem" color="#dc143c"/> Front-End</div>
                            <div className="divider div-transparent"></div>
                            <br/>
                            <div className="rowfront">
                               <div>
                                   <h2> ReactJs </h2>
                               </div>
                               <div>
                                <DiReact size="3rem" className="tecicon" color="#61dafb" />
                               </div>
                            </div>
                            <div className="rowfront">
                               <div>
                                   <h2> HTML5 </h2>
                               </div>
                               <div>
                               <DiHtml5 size="3rem" className="tecicon" color="#CB6139"/>
                               </div>
                            </div>
                            <div className="rowfront">
                               <div>
                                   <h2> CSS3 </h2>
                               </div>
                               <div>
                               <DiCss3 size="3rem" className="tecicon" color="#006FBE"/>
                               </div>
                            </div>
                        </div>  
                        
                        
                        <div className="box">
                            <div className="tittle"> <BsFillTerminalFill size="2.2rem" color="#dc143c" /> Back-End</div>
                            <div className="divider div-transparent"></div>
                            <br/>
                            <div className="rowfront">
                               <div>
                                   <h2> NodeJs </h2>
                               </div>
                               <div>
                               <DiNodejs size="3rem" className="tecicon" color="#75AC64"/>
                               </div>
                            </div>
                            <div className="rowfront">
                               <div>
                                   <h2> MySQL </h2>
                               </div>
                               <div>
                               <DiMysql size="3rem" className="tecicon" color="#007195" />
                               </div>
                            </div>
                            <div className="rowfront">
                               <div>
                                   <h2> MongoDB  </h2>
                               </div>
                               <div>
                               <DiMongodb size="3rem" className="tecicon" color="#41A949"/>
                               </div>
                            </div>
                        </div> 
                               
                      
                </div>
                
            </div>

        </motion.div>
    );
  }
  
