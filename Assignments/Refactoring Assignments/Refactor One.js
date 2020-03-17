// Refactoring Assignment One
// Maheer Mubtasim
// March 13, 2020
let x,y,xSpeed,ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x=200; y=300; 
  xSpeed=random(3,8); 
  ySpeed=random(3,8); 
}
function draw() { 
  squareGrid();
  background(80,80,80);
  rect(x,y,250,75); 
}
function squareGrid(){ //changes the direction of travel as the square hits the edge
  x += xSpeed; 
  y += ySpeed;
  if (y>=height-75||y<=0){ //determines if the rectangle is touching the top or the bottom of the window
    ySpeed=ySpeed*-1;
  }
  if (x>=width-250||x<=0){ //determines if the rectangle is touching either sides of the window
    xSpeed=xSpeed*-1;
  }
}