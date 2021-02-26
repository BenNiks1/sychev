import React from 'react'
import arcadeImg from '../../assets/img/arcade.png'

const ArcadeCanvas = () => {
  return (
    <div className="main__arcade">
        <div className="main__arcade-box">
          <img src={arcadeImg} alt="arcade" className="main__arcade-img" />
        </div>
        <div className="main__arcade-canvas">
          <canvas className="canvas" id="canvas"></canvas>
        </div>
      </div>
  )
}

export default ArcadeCanvas