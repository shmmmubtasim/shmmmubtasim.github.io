//black and white
let gridSpacing = 75;
let c = 0;
function setup() {
  createCanvas(600, 600);
  checkerboard();
}

function checkerboard(){
  background(255);
  for (let y = 0;y <= height; y += gridSpacing){
    for (let x = 0; x <= width; x += gridSpacing){
      if (c === 0){
        c = 255;
      }
      else {
        c = 0;
        fill(c);
        rect(x,y,gridSpacing,gridSpacing);
      }
    }
  }
}
function draw() {}
