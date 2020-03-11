// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectHeight, rectWidth, maxHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  rectWidth = width/5000;
  rectHeight = height/2,height;
  for (x = 0;x < width; x += rectWidth){
    rectHeight += random(noise(rectHeight / 1000),noise(rectHeight / -1000)); 
     
    rect(x,height-rectHeight,rectWidth,rectHeight);
  }
}


function draw() {}