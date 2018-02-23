function setup() {
  createCanvas(800,500);
  background(20);
}

function draw() {
  stroke(0);
  stroke('#fae');//this is a hex color
  if(mouseIsPressed){
    fill(0);

  }else{
    fill(255);
  }
  fill(255,0,0);
  fill(300,0,0);
  ellipse(mouseX,mouseY,70,70);
  fill('rgba(100%,0%,100%,0.5)');
  stroke('rgb(0,255,0)');
  rect(mouseX,mouseY,40,40);
}
