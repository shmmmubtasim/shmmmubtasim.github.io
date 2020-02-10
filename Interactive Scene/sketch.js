// Interactive Story
// Maheer Mubtasim
// February 6, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let horizon = windowHeight * 0.8;
let smileAnchor = 45;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(100);
  character(mouseX,mouseY);
  smile(mouseX,mouseY);
  smileChange();
  valley();
}
function character (x,y){
  fill(255);
  rect(x, y,60,60,15,15,40,40);
  fill(0);
  ellipse(x+17.5,y+17.5,10,10);
  ellipse(x+42.5,y+17.5, 10,10);
  ellipse(x+30,y+30,5,5);
  fill(0);
  line(x+30, y+60, x+30, y+145);
  line(x,y+90, x+30, y+70);
  line(x+30, y+70, x+60, y+90);
  line(x,y+185, x+30, y+145);
  line(x+30, y+145, x+60, y+185);
}
function smile(x,y){
  bezier(x+15, y+40, x+20,y+smileAnchor, x+40,y+smileAnchor, x+45, y+40);
}
function smileChange(){
  if (keyIsPressed === true){
    if (keyCode === ENTER){
      smileAnchor = smileAnchor + 0.2;
    }
    if (keyCode === BACKSPACE){
      smileAnchor = smileAnchor - 0.2;
    }
  }
}
function valley(){
  fill(0,255,0);
  rect(0,horizon,windowWidth,windowHeight-horizon);
}