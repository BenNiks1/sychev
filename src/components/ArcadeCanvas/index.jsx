import React from "react";
import tvImg from "../../assets/img/tv.png";
import { Canvas } from "./Canvas";

export const ArcadeCanvas = () => (
  <div className="tv-canvas">
    <Canvas />
    <img src={tvImg} alt="arcade" className="tv-canvas__img" />
  </div>
);
