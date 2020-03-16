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

function rectGrid(){ //draw a grid of "rectangles" (they're squares really) in accordance to the window size
  background(255);
  for (let y = gridSpacing/2;y < height; y += gridSpacing){
    for (let x = gridSpacing/2; x < width; x += gridSpacing){ //get a random colour within a red colour scheme and draw those squares
      let randomR = random(250);
      let randomG = random(50);
      let randomB = random(75);
      if ((height-y) > (gridSpacing/2) && (width-x) > (gridSpacing/2)){ //decide if there is enough space to draw all the rectangles without cutting them up and only draw them if they are not going to be cut
        fill(randomR, randomG, randomB);
        rect(x,y,gridSpacing,gridSpacing);
      }
    }
  }
}
function draw() {}
function keyPressed(){ //if any key on the keyboard is pressed, refresh the grid
  rectGrid();
}
function mousePressed(){ // if the mouse is pressed, change the size of the sqauares depending on which button is clicked (leftclick to make the square bigger and rightclick to make them smaller)
  if (mouseButton === LEFT){
    gridSpacing = gridSpacing + 5;
  }
  if (mouseButton === RIGHT){
    gridSpacing = gridSpacing - 5;
  }
  rectGrid();
}