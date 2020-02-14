// Interactive Story
// Maheer Mubtasim
// February 6, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let horizon;
let currentBack = 0;
let smileAnchor = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  horizon = windowHeight * 0.8;
}
function draw() {
  backgroundImage();
  
  
  strokeWeight(5);
  if (mouseY < horizon-185){
    character(mouseX,mouseY);
    smile(mouseX,mouseY);
    smileChange();
  }
  else {
    character(mouseX,horizon-185);
    smile(mouseX,horizon-185);
    smileChange();
  }
  textSize(50);
  text("Maheer", windowWidth - 200, windowHeight-50);
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
      smileAnchor = smileAnchor + 1;
    }
    if (keyCode === BACKSPACE){
      smileAnchor = smileAnchor - 1;
    }
  }
}
function valley(){
  fill(106,190,69);
  rect(0,horizon,windowWidth,windowHeight-horizon);
  fill(19,139,67);
  triangle(200, horizon, 325, horizon-800, 400, horizon);
  triangle(50, horizon, 200, horizon-700, 500, horizon);
  triangle(200, horizon, 400, horizon-500, 600, horizon);
}
function clouds(x,y,size){
  strokeWeight(0);
  fill(255);
  ellipse(x,y-size/1.5,size,size);
  ellipse(x+size/3,y-size/3,size,size);
  ellipse(x+size/1.5,y,size,size);
  ellipse(x+size/3,y+size/3,size,size);
  ellipse(x,y+size/1.5,size,size);
  ellipse(x-size/3,y+size/3,size,size);
  ellipse(x-size/1.5,y,size,size);
  ellipse(x-size/3,y-size/3,size,size);
  ellipse(x,y,size,size);
  ellipse(x,y,size,size);
}
function backgroundImage(){
  if (currentBack === 0){ //day
    background(51,153,255);
    valley();
    clouds();
  }
  if (currentBack === 1){ //night
    background(51,153,255);
    valley();
    clouds();
  }
  if (currentBack === 2){ //cloudy day
    background(51,153,255);
    valley();
    clouds();
  }
  if (currentBack === 3){ //cloudy night
    background(51,153,255);
    valley();
    clouds();
  }
}
function timeOfDay(){
  if (keyIsPressed === true){
    if (keyCode === ENTER){
      smileAnchor = smileAnchor + 1;
    }
    if (keyCode === BACKSPACE){
      smileAnchor = smileAnchor - 1;
    }
  }
}