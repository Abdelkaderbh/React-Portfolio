import { useState } from "react";
import "./works.scss"

function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);
  const data =[
    {
      id: 1,
      icon:"assets/mobile.png",
      title: "Web Medical App",
      img: "assets/WebProject.png",
      desc: "this is your Porject Description"
  },
  {
      id: 2,
      title: "Web Responsive Dashboard Project",
      img: "https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900",
      desc: "this is your Porject Description"
  }
  ]


  const handleClick = (way) =>{
    way ===  "left" ? setCurrentSlide (currentSlide > 0 ? currentSlide-1 : 2) : 
    setCurrentSlide (currentSlide < data.length -1  ? currentSlide+1 : 0)
  };

  
  return (
    <div className="works" id="Works">
<div className="slider" style={{transform:` translateX(-${currentSlide *100}vw)`}}>
  {data.map((d) => (


 
  <div className="container">
    <div className="item">
      <div className="left">
        <div className="leftContainer">
          <div className="imgContainer">
            <img src={d.icon} alt="" />
          </div>
          <h2> {d.title} </h2>
          <p> {d.desc} </p>
          <span>Projects</span>
        </div>
      </div>
      <div className="right">
        <img src={d.img} alt="" />
      </div>
    </div>
  </div>
)) }
</div>
 
<img src="assets/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")}/>
<img src="assets/arrow.png" className="arrow right" alt=""  onClick={()=> handleClick("right")}/>

    </div>
  );
}

export default Works