// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  strokeWeight(5);
  curvyLine(1000,100,1000,100);

}
function curvyLine(x1,y1,x2,y2){ // draws a curvy line
  bezier(x1, y1,x1+(x1/10), y1+(y1/5), x1+(x1/9), y1-(y1/5),x1+(x1/8), y1+(y1/5),x1+(x1/7), y1-(y1/5),x1+(x1/10), y1+(y1/5), x1+(x1/9), y1-(y1/5),x1+(x1/8), y1+(y1/5),x1+(x1/7), y1-(y1/5),x1+(x1/6), y1+(y1/5), x1+(x1/5), y1-(y1/5),x1+(x1/4), y1+(y1/5),x1+(x1/3), y1-(y1/5), x2, y2);
}