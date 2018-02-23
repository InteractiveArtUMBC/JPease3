var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(51);

}

function draw() {
    //distance from center of the screen
    fill(random(255,255), random(0,255), random(255,0));
    ellipse(x,y,120,80);
    fill(random(0,255), random(255,0), random(255,255));
    triangle(x,y,65,30,75,55);

    //bouncing horizontally
    x = x + xspeed;

    if(x > windowWidth || x <0){
        xspeed = -xspeed
    }

    //bouncing vertically≠
    y = y + yspeed;

    if(y > windowHeight || y <0){
        yspeed = -yspeed;
    }
}