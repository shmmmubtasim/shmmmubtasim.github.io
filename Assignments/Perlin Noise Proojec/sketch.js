// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectHeight, rectWidth, maxHeight;
let position = 500;
let thiccness = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}


function draw() {
  background(220);
  generateTerrain();
}

function generateTerrain (){
  rectWidth = width/thiccness;
  rectHeight = height/3;
  for (x = 0;x < width; x += rectWidth){
    rectHeight = noise((position+x) * 0.004);
    rect(x,height*rectHeight,rectWidth,height+rectHeight);
    position = position + 0.005;
  }
}
