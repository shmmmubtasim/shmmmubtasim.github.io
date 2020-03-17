// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size
// Refactoring Assignment Two
// Maheer Mubtasim
// March 13, 2020
let halfX;
let halfY;

function setup() {
  createCanvas(480, 270);
  halfX = width/2;
  halfY = height/2;
}

function draw() {
  background(255);
  stroke(0);
  line(halfX, 0, halfX, height);
  line(0, halfY, width, halfY);
  noStroke();
  fill(0);
  renderQuadrant();
}

function renderQuadrant(){ //determines the quadrant and draws a square accordingly
  if (mouseX < halfX && mouseY < halfY){
    rect(0,0,halfX,halfY);
  }
  else if (mouseX > halfX && mouseY < halfY){
    rect(halfX,0,halfX,halfY);
  }
  else if (mouseX < halfX && mouseY > halfY){
    rect(0,halfY,halfX,halfY);
  }
  else if (mouseX > halfX && mouseY > halfY){
    rect(halfX,halfY,halfX,halfY);
  }
}