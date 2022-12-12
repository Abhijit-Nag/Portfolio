import React from 'react'
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import "./app.scss"
import {useState} from "react";
import Menu from './components/menu/Menu';
function App() {
  const [menuOpen, setMenuOpen]=useState(false);
  return (
    <div className="App">
     <Topbar open={menuOpen} setOpen={setMenuOpen}/>
     <Menu open={menuOpen} setOpen={setMenuOpen}/>
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonial/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
