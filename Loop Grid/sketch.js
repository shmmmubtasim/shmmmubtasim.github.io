// Multi-Coloured Grid
// Maheer Mubtasim
// Feb 27, 2020
//
// Extra for Experts:
// - the size of the squares change with mouse clicks
// - the colours change with keyboard presses
// - there is a colour scheme (red)
// - only full squares are drawn (no squares "fall-off")
let gridSpacing = 30;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  rectGrid();
}

function rectGrid(){
  background(255);
  for (let y = gridSpacing/2;y < height; y += gridSpacing){
    for (let x = gridSpacing/2; x < width; x += gridSpacing){
      let randomR = random(250);
      let randomG = random(50);
      let randomB = random(75);
      if ((height-y) > (gridSpacing/2) && (width-x) > (gridSpacing/2)){
        fill(randomR, randomG, randomB);
        rect(x,y,gridSpacing,gridSpacing);
      }
    }
  }
}
function draw() {}
function keyPressed(){
  rectGrid();
}
function mousePressed(){
  if (mouseButton === LEFT){
    gridSpacing = gridSpacing + 5;
  }
  if (mouseButton === RIGHT){
    gridSpacing = gridSpacing - 5;
  }
  rectGrid();
}