//Black and White Target
let diameter;
function setup() {
  createCanvas(400, 400);
  diameter = width;
}
function draw() {
  background(240);
  for (let i = 0; i < 400; i += 40){
    ellipse(200, 200, diameter);
    diameter = diameter - 40;
  }
}