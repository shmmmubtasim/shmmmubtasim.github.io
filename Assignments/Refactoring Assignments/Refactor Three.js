//Black and White Target
let diameter;
function setup() {
  createCanvas(400, 400);
  diameter = 400;
}
function draw() {
  background(240);
  for (i = 0; i < 400; i + 40){
    ellipse(200, 200, diameter, diameter);
    diameter = diameter - 40;
  }
}