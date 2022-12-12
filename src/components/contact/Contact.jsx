// import React from 'react'
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
      <h1>Co-ordinate with Me</h1>
        <img src="assets/shakehands.png" alt="" />
      </div>
      
      <div className="right">
        <h2>Contact.</h2>
        <form>
          <input type="email" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
