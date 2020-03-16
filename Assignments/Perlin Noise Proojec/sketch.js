// Perlin Noise Project
// Maheer Mubtasim
// March 13, 2020
//
// Extra for Experts:
// - the sketch pans
// - a flag is drawn at the highest point

let rectHeight, rectWidth,tallest,tallestX;
let position = 500;
let thiccness = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}


function draw() {
  background(220);
  generateTerrain();
  drawFlag();
}

function generateTerrain (){ //function to execute the code for drawing all the rectangles that make up the terrain
  rectWidth = width/thiccness; 
  rectHeight = height/3; 
  tallest = height;
  tallestX = 0;
  for (let x = 0;x < width; x += rectWidth){ //until the whole screen is filled, draw these rectangles
    rectHeight = noise((position+x) * 0.004);
    rect(x,height*rectHeight,rectWidth,height+rectHeight);
    position = position + 0.005;
    if (rectHeight*height < tallest){ //determines which rectangle stands the tallest and where along the x-axis is it located
      tallest = rectHeight*height;
      tallestX = x;
    }
  }
}
function drawFlag() { //draws a flag at the highest point
  strokeWeight(5);
  line(tallestX, tallest-50,tallestX,tallest);
  triangle(tallestX, tallest-50, tallestX+20,tallest-40, tallestX,tallest-30);
}
