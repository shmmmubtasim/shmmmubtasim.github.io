// Refactoring Assignment Four
// Maheer Mubtasim
// March 13, 2020
let gridSpacing = 75;
let colour = 0;
function setup() {
  createCanvas(600, 600);
  checkerboard();
}

function checkerboard(){ //function that draws a black and a white square every other square
  background(255);
  for (let y = 0;y <= height; y += gridSpacing){
    for (let x = 0; x <= width; x += gridSpacing){
      if (colour === 0){
        colour = 255;
      }
      else {
        colour = 0;
        fill(colour);
        rect(x,y,gridSpacing,gridSpacing);
      }
    }
  }
}
function draw() {}
