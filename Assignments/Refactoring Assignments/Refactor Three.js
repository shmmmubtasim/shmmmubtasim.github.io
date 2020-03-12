//Black and White Target
let diameter;
function setup() {
  createCanvas(400, 400);
  
}
function draw() {
  diameter = width;
  background(240);
  for (let i = 0; i < 400; i += 40){
    ellipse(200, 200, diameter,diameter);
    diameter = diameter - 40;
  }
  print(diameter);
}