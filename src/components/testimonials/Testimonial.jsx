// import React from 'react'
import "./testimonials.scss"
import { YouTube, DoubleArrow } from "@material-ui/icons"

export default function Testimonial() {
  const data=[
    {
      id:"1",
      name:"Tom Maguire",
      post:"Founder of Spark Foundation",
      desc: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam adipisci id",

      img:"assets/pic.png",
    },

    {
      id:"2",
      name:"Jerry Alex",
      post:"SDE at Google",
      desc: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam adipisci id",
      img:"assets/oldman.png",
    },

    {
      id:"3",
      name:"Schuzzy",
      post:"Microsoft SDE2",
      desc: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam adipisci id",
      img:"assets/girl.png",
    },
    
  ]
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=>(
          <div className="card">
          <div className="top">
            <DoubleArrow className="left" />
            <img src={d.img} className="user" alt="" />
            <YouTube className="right" />
          </div>
          <div className="center">{d.desc}</div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.post}</h4>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}
