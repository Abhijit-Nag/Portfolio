// import React from 'react'
import "./topbar.scss"
import {Mail, Person } from "@material-ui/icons"

export default function Topbar({open, setOpen}) {
  return (
    <div className={"topbar "+ (open && "active")}>

        <div className="wrapper">

            <div className="left">

                <a href="#intro" className="logo">richest.</a>
                
                <div className="itemContainer">
                <Person className="icon"/>
                <span>+91 8250401029</span>
                </div>
            
                <div className="itemContainer">
                  <Mail className="icon"/>
                  <span>abhijitnag1000@gmail.com</span>
                </div>
            </div>



            <div className="right">
                <div className="hamburger" onClick={()=>setOpen(!open)}>
                  <span className="line1"></span>
                  <span className="line1"></span>
                  <span className="line1"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
