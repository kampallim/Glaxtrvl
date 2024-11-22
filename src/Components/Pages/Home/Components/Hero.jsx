import React from 'react'
import video from "../../../../assests/spacevideo.mp4"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
      
      <video src={video} autoPlay loop muted></video>

      <div className="content">
        <h1>Travel.Galaxies</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, necessitatibus.</p>

        
        <div className="buttons">
        <Link to="/training">Try Now</Link>
        <Link to="/pricing">Lanch!</Link>
      </div>
      </div>

    
    </div>
  )
}

export default Hero
