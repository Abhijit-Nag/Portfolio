import React, { useState } from 'react'
import "./works.scss"
import { ArrowRight, ChevronLeft, ChevronRight } from '@material-ui/icons'

export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "",
      title: "Web Design",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reprehenderit sapiente modi harum velit inventore quis.",
      img:
        "https://www.financecornwall.co.uk/wp-content/uploads/2022/05/Top-10-Coding-Skills-Your-Kids-Should-Learn-In-2022.jpg",
    },
    {
      id: "2",
      icon: "",
      title: "Mobile",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reprehenderit sapiente modi harum velit inventore quis.",
      img:
        "https://www.financecornwall.co.uk/wp-content/uploads/2022/05/Top-10-Coding-Skills-Your-Kids-Should-Learn-In-2022.jpg",
    },
    {
      id: "3",
      icon: "",
      title: "Design",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reprehenderit sapiente modi harum velit inventore quis.",
      img:
        "https://www.financecornwall.co.uk/wp-content/uploads/2022/05/Top-10-Coding-Skills-Your-Kids-Should-Learn-In-2022.jpg",
    },

  ]

  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2):
    setCurrentSlider(currentSlider<data.length-1? currentSlider+1 : 0);
  };
  return (
    <div className='works' id='works'>
      {/* <ChevronLeft/> */}

      {/* <h1>Works</h1> */}

      <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="assets/mobile.png" alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">

                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ChevronLeft className='arrow left' onClick={() => handleClick("left")} />
      <ChevronRight className='arrow right' onClick={()=> handleClick("right")} />
    </div>

  )
}
