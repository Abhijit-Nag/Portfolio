import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from "../../data"

export default function Portfolio() {

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  useEffect(() => {
   
       switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
    
   
  }, [selected]);
  return (
    <div className='portfolio ' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((data) => (
          <PortfolioList title={data.title}
            active={selected === data.id}
            setSelected={setSelected}
            id={data.id}
          />
        ))}
      </ul>

      <div className="container">

        {
          data.map(d => (
            <div className='item'>
              <img
                src={d.img} alt="" />
              <h3 className='name'>{d.title}</h3>
            </div>
            
          ))
        }
      </div>


      {/* <div className="item">
          <img src="assets/banking.png" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>  */}
    </div>
  )
}
