function setup() {
  createCanvas(850,650);
  background(0);
}

function draw() {
  stroke(0);
  stroke('(255,255,255)')
  if(mouseIsPressed){
    fill(0);

  }else{
    fill(255,204,0);
  }
  fill('rgba(100%,10%,255%,0.08)');
  ellipse(mouseX,mouseY,150,150);
  fill(0);
  ellipse(mouseX,mouseY,10,10);
}