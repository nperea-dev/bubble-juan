var bubble={
    
    x:100,
    y:100,
}
var juan
function preload(){
    juan=loadImage('1.png');
}

function setup() {
createCanvas(400,400)
}

function draw() {
    background(0);
    fill(255);
    textSize(50);
    text("aaarrgg",50,70);
    move();
    show();
}

function show(){
    //stroke(255); //el codigo comentado es el original bubble
    //strokeWeight(4);
    //noFill();
    //ellipse(bubble.x, bubble.y,24,24);
    image(juan,bubble.x, bubble.y,120,120);
}

function move(){
    bubble.x=bubble.x+random(-5,5);
     bubble.y=bubble.y+random(-5,5);
   
    
}