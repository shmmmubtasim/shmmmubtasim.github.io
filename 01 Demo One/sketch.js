// Basic Geometry adn events demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r = 0;
let x,y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(100);
  character(x,y);
}
function keyboardInput(){
  if (keyIsPressed === true){
    if (keyCode === LEFT_ARROW){
      x-=10;
    }
    if (keyCode === RIGHT_ARROW){
      x+=10;
    }
    if (keyCode === UP_ARROW){
      y-=10;
    }
    if (keyCode === DOWN_ARROW){
      y+=10;
    }
  }
}
function character(x,y){
  fill(255);
  strokeWeight(1.5);
  ellipse(x,y,50,50);
  fill(0,200,0);
  ellipse(x-10, y-5, 10, 10);
  ellipse(x+10, y-5, 10, 10);
  strokeWeight(3);
  line(x-5,y+15,x+5,y+15);
}