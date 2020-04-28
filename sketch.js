var bubble={
    
    x:150,
    y:200,
}
var juan
function preload(){
    juan=loadImage('1.png');
}

function setup() {
createCanvas(600,400)
}

function draw() {
    background(0);
    move();
    show();
}

function show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    //ellipse(bubble.x, bubble.y,24,24);
    image(juan,bubble.x, bubble.y,100,100);
}

function move(){
    bubble.x=bubble.x+random(-5,5);
     bubble.y=bubble.y+random(-5,5);
}