let a,b,c,d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  a=200; b=300; 
  c=random(3,8); //pick a random number between 3 and 8
  d=random(3,8); //"								"
}
function draw() { 
  squareGrid();
  background(80,80,80);
  rect(a,b,250,75); 
}
function squareGrid(){
  a += c; 
  b += d;
  if (b>=height-75||b<=0){ // draw a square if b is bigger than or equal to (height-75) or smaller than or equal to 0
	d=d*-1;
  }
  if (a>=width-250||a<=0){ // draw a square if a is bigger than or equal to (width-250) or smaller than or equal to 0
	c=c*-1;
  }
}