window.onload = function () {
  let // Canvas

    ctx = document.getElementById("canvas").getContext("2d"),
    canvasWidth = (document.getElementById("canvas").width = 530),
    canvasHeight = (document.getElementById("canvas").height = 400),
    // Img
    htmlImg = document.getElementById("htmlImg"),
    pugImg = document.getElementById("pugImg"),
    bemImg = document.getElementById("bemImg"),
    cssImg = document.getElementById("cssImg"),
    sassImg = document.getElementById("sassImg"),
    jsImg = document.getElementById("jsImg"),
    gulpImg = document.getElementById("gulpImg"),
    reactImg = document.getElementById("reactImg"),
    // Text color, font, background color
    textColor = ["black"],
    fillText = [
      htmlImg,
      pugImg,
      bemImg,
      cssImg,
      sassImg,
      gulpImg,
      jsImg,
      reactImg,
    ];
  (textFont = " bold 50px yahei"),
    (backgroundColor = "rgb(255,255,255,0)"),
    // Size of Background Rectangle
    (backgroundWidth = 150),
    (backgroundHeight = 150),
    // When adding text to a rectangle, the height deviates a little.
    (fixHeight = 150),
    // Speed
    (speedX = 2),
    (speedY = 2),
    // Moving direction, starting at'r-b'lower right
    (direction = "r-b"),
    // icon X and Y coordinates
    (positionX = 0),
    (positionY = 0),
    // Number of collisions, used to calculate background and text color
    (count = 0);

  html();

  function html() {
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
    // Text
    ctx.font = textFont;
    ctx.fillStyle = textColor;

    ctx.drawImage(
      fillText[count % 8],
      positionX,
      positionY + backgroundHeight - fixHeight
    );
    // ctx.fillText(
    //   fillText[count % 8],
    //   positionX,
    //   positionY + backgroundHeight - fixHeight
    // );
    // Background color
    ctx.fillStyle = backgroundColor;
    // Start animation
    window.requestAnimationFrame(html);
  }
}