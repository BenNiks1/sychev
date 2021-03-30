import React from "react";
import {
  htmlImg,
  pugImg,
  bemImg,
  cssImg,
  sassImg,
  gulpImg,
  jsImg,
  reactImg,
} from "./images";

export const Canvas = () => {
  const canvasRef = React.useRef(null);

  const canvas = () => {
    // workaround for importing pictures
    const htmlPng = new Image(),
      pugPng = new Image(),
      bemPng = new Image(),
      cssPng = new Image(),
      sassPng = new Image(),
      gulpPng = new Image(),
      jsPng = new Image(),
      reactPng = new Image();
    htmlPng.src = htmlImg;
    pugPng.src = pugImg;
    bemPng.src = bemImg;
    cssPng.src = cssImg;
    sassPng.src = sassImg;
    gulpPng.src = gulpImg;
    jsPng.src = jsImg;
    reactPng.src = reactImg;
    // Canvas
    let ctx = canvasRef.current.getContext("2d"),
      canvasWidth = (canvasRef.current.width = 480),
      canvasHeight = (canvasRef.current.height = 367),
      fillText = [
        htmlPng,
        pugPng,
        bemPng,
        cssPng,
        sassPng,
        gulpPng,
        jsPng,
        reactPng,
      ],
      backgroundColor = "rgb(255,255,255,0)",
      // Size of Background Rectangle
      backgroundWidth = 150,
      backgroundHeight = 150,
      // When adding text to a rectangle, the height deviates a little.
      fixHeight = 150,
      // Speed
      speedX = 2,
      speedY = 2,
      // Moving direction, starting at'r-b'lower right
      direction = "r-b",
      // icon X and Y coordinates
      positionX = 0,
      positionY = 0,
      // Number of collisions, used to calculate background and text color
      count = 0;

    draw();
    function draw() {
      // Moving direction
      switch (direction) {
        // Lower right
        case "r-b":
          positionX += speedX;
          positionY += speedY;
          break;
        // Upper right
        case "r-t":
          positionX += speedX;
          positionY -= speedY;
          break;
        // Lower left
        case "l-b":
          positionX -= speedX;
          positionY += speedY;
          break;
        // Upper left
        case "l-t":
          positionX -= speedX;
          positionY -= speedY;
          break;
      }
      // Empty the canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      // Redraw
      ctx.fillRect(positionX, positionY, backgroundWidth, backgroundHeight);
      // Collision detection
      // Bottom
      if (positionY + backgroundHeight >= canvasHeight) {
        direction = direction.replace("b", "t");
        // Collision Number Statistics
        count += 1;
      }
      // Right
      if (positionX + backgroundWidth >= canvasWidth) {
        direction = direction.replace("r", "l");
        count += 1;
      }
      // Left
      if (positionX < 0) {
        direction = direction.replace("l", "r");
        count += 1;
      }
      // Upper
      if (positionY < 0) {
        direction = direction.replace("t", "b");
        count += 1;
      }
      // Draw
      ctx.drawImage(
        fillText[count % 8],
        positionX,
        positionY + backgroundHeight - fixHeight
      );
      // Background color
      ctx.fillStyle = backgroundColor;
      // Start animation
      window.requestAnimationFrame(draw);
    }
  };

  React.useEffect(() => {
    canvas();
  }, []);
  
  return <canvas className="canvas" ref={canvasRef}></canvas>;
};


