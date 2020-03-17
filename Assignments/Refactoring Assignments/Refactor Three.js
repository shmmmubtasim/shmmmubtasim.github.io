// Refactoring Assignment Three
// Maheer Mubtasim
// March 13, 2020
let diameter;
function setup() {
  createCanvas(400, 400);
  
}
function draw() {
  diameter = width;
  background(240);
  for (let i = 0; i < 400; i += 40){ //until i is 400, i will be increasing in increments of 40 and each time an ellipse will be drawn
    ellipse(200, 200, diameter,diameter);
    diameter = diameter - 40;
  }
}