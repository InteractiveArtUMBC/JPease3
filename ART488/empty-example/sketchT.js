function setup() {
  createCanvas(800,800);
  frameRate(30);

}
function draw(){
    squares(10,10);
    squares(30,30);
    squares(5,15);
    squares(15,5);
    squares(25,5);
    squares(5,25);
    squares(30,14);
    squares(14,30);
    squares(40,20);
    squares(20,40);
    circles(50,50);
    circles(40,40);
    circles(15,5);
    circles(5,15);
    circles(5,25);
    circles(25,5);
    circles(14,30);
    circles(30,14);
    circles(20,40);
    circles(40,20);
}

function squares(x,y){
    translate(x,y);
    push();
    fill(200,100,0);
    rect(100,200,10,10);
    rect(100,100,10,10);
    ellipse(200,100,10,10);
    ellipse(200,200,10,10);
    pop();
}
function circles(x,y){
    translate(x,y);
    push();
    fill(153);
    ellipse(100,200,10,10);
    ellipse(100,100,10,10);
    rect(200,100,10,10);
    rect(200,200,10,10);
    pop();
}