function setup() {
  createCanvas(600,600);
  background(50);
}

function draw() {
  if(mouseIsPressed){
    fill(0);

  }else{
    fill(255);
  }
  ellipse(mouseX,mouseY,60,60);
  triangle(mouseX,mouseY,49,37,26,14,68,41);
}