// State Variable 
// Maheer Mubtasim
// Feb 12, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let quadrant;
let q1fade = 0;
let q2fade = 0;
let q3fade = 0;
let q4fade = 0;
let fadeSpeed = 10; 

function setup() {
  createCanvas(800,800);
}

function draw(){
  background(255);
  strokeWeight(8);
  findQuadrant();
  strokeWeight(3);
  line(400,0,400,800);
  line(0,400,800,400);
  renderQuadrant(); 
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

function renderQuadrant(){
  if (quadrant === 1){
    fill(0);
    q1fade = 255;
  }
  else {
    fill(0,0,0, q1fade);
    q1fade -= fadeSpeed;
  }
  rect(400,0,400,400);
  if (quadrant === 2){
    fill(0);
    q2fade = 255;
    
  }
  else {
    fill(0,0,0, q2fade);
    q2fade -= fadeSpeed;
  }
  rect(0,0,400,400);
  if (quadrant === 3){
    fill(0);
    q3fade = 255;
  }
  else {
    fill(0,0,0, q3fade);
    q3fade -= fadeSpeed;
    
  }
  rect(0,400,400,400);
  if (quadrant === 4){
    fill(0);
    q4fade = 255;
  }
  else {
    fill(0,0,0, q4fade);
    q4fade -= fadeSpeed;
    
  }
  rect(400,400,400,400);
}