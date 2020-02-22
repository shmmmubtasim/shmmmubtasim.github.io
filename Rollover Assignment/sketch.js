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
  background(255);
  strokeWeight(8);
  fill(255);
  rect(0,0,800,800)
  findQuadrant();
  strokeWeight(3);
  line(400,0,400,800);
  line(0,400,800,400);
  print(quadrant); 
  if (quadrant === 1){
    fill(0);
    rect(400,0,400,400);
  } 
  if (quadrant === 2){
    fill(0);
    rect(0,0,400,400);
  } 
  if (quadrant === 3){
    fill(0);
    rect(0,400,400,400);
  } 
  if (quadrant === 4){
    fill(0);
    rect(400,400,400,400);
  } 
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

