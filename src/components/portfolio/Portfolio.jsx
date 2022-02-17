import "./portfolio.scss"
import PortfolioList from "../portfoliolist/PortfolioList"
import { useEffect, useState } from "react"
import {webPortfolio,mobilePortfolio,designPortfolio} from "../../data" ;

function Portfolio() {
  const [selected,setSelected] = useState("Web");
  const [data,setData] = useState([])

const list = [
  {
    id:"Web",
    title:"Web Projects"
  },
   {
    id:"Graphic",
    title:"Graphic Designes"
  },

  {
    id:"Mobile",
    title:"Mobile Apps"
  },
]

useEffect(()=>{
switch(selected){
  case "Web":
    setData(webPortfolio);
    break;
  case "Graphic":
    setData(designPortfolio);
    break;
  case "Mobile":
    setData(mobilePortfolio);
    break;
    default:
      setData(webPortfolio)
}
},[selected])

  return (
    <div className="portfolio" id="portfolio">
<h1>Portfolio</h1>
<ul>
  {list.map(item=>(
<PortfolioList title={item.title}  active={ selected === item.id} setSelected={setSelected} id={item.id} />

  ))}

</ul>
<div className="container">
   {data.map((d)=> (
  <div className="item">
    <img src={d.img} />
    <h3> {d.title} </h3>
  </div>
  
  ))}
    </div>
    </div>
  )
}

export default Portfolio