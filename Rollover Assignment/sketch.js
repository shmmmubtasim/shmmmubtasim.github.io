// State Variable 
// Maheer Mubtasim
// Feb 12, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let quadrant;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(220);
  findQuadrant();
  line(400,0,400,800);
  line(0,400,800,400);
  
}
function findQuadrant(){
  if (mouseX <= 400 && mouseY <= 400){
    quadrant = 2;
  } 
  if (mouseX >= 400 && mouseY <= 400){
    quadrant = 1;
  } 
  if (mouseX <= 400 && mouseY >= 400){
    quadrant = 3;
  } 
  if (mouseX >= 400 && mouseY >= 400){
    quadrant = 4;
  }
}
