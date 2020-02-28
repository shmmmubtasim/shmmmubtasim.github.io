// Multi-Coloured Grid
// Maheer Mubtasim
// Feb 27, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridSpacing = 30;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  rectGrid();
}

function rectGrid(){
  for (let y = gridSpacing/2;y < height; y += gridSpacing){
    for (let x = gridSpacing/2; x < width; x += gridSpacing){
      let randomR = random(255);
      let randomG = random(255);
      let randomB = random(255);
      
      fill(randomR, randomG, randomB);
      rect(x,y,gridSpacing,gridSpacing);
    }
  }
}
function draw() {

  
}
function keyPressed(){
  rectGrid();
}

