// State Variable 
// Maheer Mubtasim
// Feb 12, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(800,800);
}

function draw() {
  background(220);
  line(400,0,400,800);
  line(0,400,800,400);
  println(quadrant);
}
function quadrant(){
  if (mouseX <= 400 && mouseY <= 400){
    return 2;
  } 
  else if (mouseX >= 400 && mouseY <= 400){
    return 1;
  } 
  else if (mouseX <= 400 && mouseY >= 400){
    return 3;
  } 
  else if (mouseX >= 400 && mouseY >= 400){
    return 4;
  }
}