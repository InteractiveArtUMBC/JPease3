function setup() {
  createCanvas(1050,450);
}

function draw() {
  stroke(0);
  if(mouseIsPressed){
    fill(0);

  }else{
      fill(300);
  }
  rect(mouseX,mouseY,150,150);
  fill(100,0,100);
  rect(mouseX,mouseY,125,125);
  fill(0,0,255);
  rect(mouseX,mouseY,100,100);
  fill(0,255,0);
  rect(mouseX,mouseY,75,75);
  fill(255,204,0);
  rect(mouseX,mouseY,50,50);
  fill(255,0,0);
  rect(mouseX,mouseY,25,25);
;}