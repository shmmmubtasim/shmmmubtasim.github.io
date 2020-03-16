// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let hX1,hX2,vX1,vX2,hY1,hY2,vY1,vY2;
function setup() {
  createCanvas(400, 400);
  hX1 = random(100);
  hY1 = random(100);
  hX2 = (100,300);
  hY2 = hY1;
 
}

function draw() {
  generateArt();
}
function horizontalLine(){
  line(hX1,hY1,hX2,hY2);
}
function verticalLine(){
  line(vX1,vY1,vX2,vY2);
}
function generateArt(){
  horizontalLine();
  vX1 = hX2;
  vY1 = hY2;
  vX2 = vX1;
  vY2 = random(100,600);
  verticalLine();
  hX1 = vX2;
  hY1 = vH2;
  hX2 = (100,300);
  hY2 = hY1;
}