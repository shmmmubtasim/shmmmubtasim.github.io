// State Variable 
// Maheer Mubtasim
// Feb 12, 2020
//
// Extra for Experts:
// - if mouse is pressed in quadrant one, everything turns black
// - if mouse is pressed in quadrant four you can toggle between yellow and black
// - i used different colours instead of just white and black
let quadrant;
let q1fade = 0;
let q2fade = 0;
let q3fade = 0;
let q4fade = 0;
let fadeSpeed = 10; 
let allBlack = false;
let lightSwitch = 0;


function setup() {
  createCanvas(800,800);
}

function draw(){
  if (quadrant !== 1) clear();
  background(255);
  strokeWeight(8);
  findQuadrant();
  strokeWeight(3);
  line(400,0,400,800);
  line(0,400,800,400);
  backgroundColour();
  renderQuadrant();
  if (allBlack === true){ //if allBlack is true, everything becomes black
    fill(0);
    rect(0,0,800,800);
  }
  if (quadrant !== 1) allBlack = false; // if the mouse leaves quadrant 1, allBlack turns false
  
   
}
function findQuadrant(){ // determines what quadrant the mouse is in... the regular cartesian plane is used
  if (mouseX < 400 && mouseY < 400){
    quadrant = 2;
  } 
  if (mouseX > 400 && mouseY < 400){
    quadrant = 1;
  } 
  if (mouseX < 400 && mouseY > 400){
    quadrant = 3;
  } 
  if (mouseX > 400 && mouseY > 400){
    quadrant = 4;
  }
}

function backgroundColour(){ // sets the background colour of each quadrant
  fill('red'); //quadrant 1
  rect(400,0,400,400);
  fill('green'); //quadrant 2
  rect(0,0,400,400);
  fill('blue'); //quadrant 3
  rect(0,400,400,400);
  fill('yellow');//quadrant 4
  rect(400,400,400,400);
}
function renderQuadrant(){ //identifies mouse location and depending on where the mouse is, it colours the quadrants. Whichever quadrant the mouse is in will be black and when the mouse leaves, it fades into the original colour
  if (quadrant === 1){
    fill(0);
    q1fade = 255;
  }
  else {
    fill(100,100,200, q1fade);
    q1fade -= fadeSpeed;
  }
  rect(400,0,400,400);
  if (quadrant === 2){
    fill(0);
    q2fade = 255;
    
  }
  else {
    fill(0,0,0, q2fade);
    q2fade -= fadeSpeed;
  }
  rect(0,0,400,400);
  if (quadrant === 3){
    fill(0);
    q3fade = 255;
  }
  else {
    fill(0,0,0, q3fade);
    q3fade -= fadeSpeed;
    
  }
  rect(0,400,400,400);
  if (quadrant === 4){
    fill(lightSwitch);
    if(lightSwitch===false)q4fade = 255;
  }
  else {
    fill(0,0,0, q4fade);
    q4fade -= fadeSpeed;
    
  }
  
  
  rect(400,400,400,400);
}

function mousePressed() { 
  if (quadrant === 1){ // if the mouse is pressed in quadrant 1, allBlack is set to true
    allBlack = true;
     
  }
  if (quadrant === 4){ // if the mouse is pressed in quadrant 4, te lightswitch turns on and off
    if (lightSwitch === 0){ 
      //if lightswitch is off(black), it turns yellow
      lightSwitch = 'yellow';
      q4fade=0;
      
    }
    //if lightswitch is on(yellow), it turns black
    else if (lightSwitch === 'yellow'){
      lightSwitch = 0;
    }
  }
}

