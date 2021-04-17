import React, { useEffect } from 'react'
import './Card.css'
import './Home.css'
import { motion } from "framer-motion"
import TextTransition, { presets } from "react-text-transition";



export default function Home() {
    
    const TEXTS = [
        "Welcome to ",
        "my Portfolio",
        "It's time ",
        "to meet me ",
        "Let's begin ",
        
      ];

    const [index, setIndex] = React.useState(0);

    useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1500 // every 2,5 seconds
    );
    return () => clearTimeout(intervalId);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 , x: -400}}
            animate={{opacity: 1, x:0 }}
            exit={{ opacity: 0, x: -400}}
        >
            <div className="Card">
                <div className="intro">
                    
                    <h1>
                    <TextTransition
                        noOverflow={true}
                        
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                        className="introText"
                    />
                    </h1>
                     
                    
                </div>       
            </div>
        </motion.div>
    );
  }
  
