import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import {ExpandMore} from "@material-ui/icons"

import {init} from 'ityped'

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    // console.log(textRef);
    init(textRef.current, {
       showCursor: true,
      //  backDelay: 1500,
      //  backSpeed:60,
       strings: ["Developer", "Designer", "Content Creator"],
       });

  }, []);
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>

      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Abhijit Nag</h1>
          <h3>Freelance  <span ref={textRef}></span></h3>
        </div>

        <a href="#portfolio">
          <ExpandMore className='icon'/>
        </a>

      </div>
    </div>
  )
}
