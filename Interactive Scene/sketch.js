// Interactive Story
// Maheer Mubtasim
// February 6, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(100);
  character(mouseX,mouseY);
}
function character (x,y){
  fill(255);
  ellipse(x, y, 55, 55);
  fill(14,11,2);
  ellipse(x+10,y-5,10,10);
  ellipse(x-10,y-5, 10,10);
}
  

