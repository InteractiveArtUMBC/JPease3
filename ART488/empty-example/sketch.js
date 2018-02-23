function setup() {
  createCanvas(600,600);
  background(51);
}

function draw() {
  stroke(0);
  stroke(255,0,255);
  if(mouseIsPressed){
    fill(0);

  }else{
    fill(255);
  }
  fill(255,0,0);
  fill(color(0,0,255));
  fill(300,0,0);
  ellipse(mouseX,mouseY,70,70);
  fill(0,0,255);
  rect(mouseX,mouseY,50,50);
  fill(255,204,100)
  rect(mouseX,mouseY,40,40);
  fill('#222222');
  ellipse(mouseX,mouseY,50,50);
}