import React from "react";
import tvImg from "../../assets/img/tv.png";
import Canvas from "./Canvas";

const ArcadeCanvas = () => {
  return (
    <div className="tv-canvas">
      <Canvas />
      <img src={tvImg} alt="arcade" className="tv-canvas__img" />
    </div>
  );
};

export default ArcadeCanvas;
