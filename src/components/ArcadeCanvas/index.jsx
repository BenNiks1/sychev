import React from "react";
import arcadeImg from "../../assets/img/arcade.png";
import Canvas from "./Canvas";

const ArcadeCanvas = () => {
  return (
    <div className="main__arcade">
      <div className="main__arcade-box">
        <img src={arcadeImg} alt="arcade" className="main__arcade-img" />
      </div>
      <div className="main__arcade-canvas">
        <Canvas />
      </div>
    </div>
  );
};

export default ArcadeCanvas;
