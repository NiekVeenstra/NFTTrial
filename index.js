const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

const saveLayer = (_canvas) => {
  fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
  console.log("image created.");
};

const drawLayer = async () => {
  const image = await loadImage("./lemon.png");
  ctx.drawImage(image, 0, 0, 1000, 1000);
  console.log("this ran.");
  saveLayer(canvas);
};

drawLayer();