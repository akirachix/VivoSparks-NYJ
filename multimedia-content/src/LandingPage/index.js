import pic1 from "../assets/pic1.jpg"
import React from "react"
import "./index.css"

 function LandingPage(){
    return(
        <div className="container">
            <div className="heading">
            <h2>Explore Multimedia Content with<br/>
            <b></b>Vivo Sparks</h2>
            <p className="paragraph">This high refresh rate delivers smooth scrolling and animations<br/>
               enhancing the overall visual experience. The display also supports<br/>
               vivid colors and deep blacks for an immersive multimedia experience.</p>

            <button className="btn">Get Started</button>
            </div>
            <div>
              <img src= {pic1} alt="Networking image"  className="image" />
            </div>

        </div>
    )
}
export default LandingPage