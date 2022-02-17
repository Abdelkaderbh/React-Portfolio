import "./Intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor:false,
      backDelay:1500,
      strings:["Web Developer","Grahpic Designer","Mobile Developer"]
    });
  },[]);
  return (
    <div className='intro' id="intro">
      <div className="left"> 
        <div className="imgContainer">
          <img src="assets/man.png" />
        </div>
      </div>
      <div className="right">
              <div className="wrapper">
                <h2>Hello , I'm </h2>
                <h1> Abdelkader Ben Hassen </h1>
                <h3>Freelance  <span ref={textRef}> </span> </h3>
              </div>
              <a href="#portfolio">
                <img src="assets/down.png" />
              </a>

      </div>
    </div>
  )
}

export default Intro