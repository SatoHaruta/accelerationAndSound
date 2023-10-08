function preload(){
    musicPreload();
}

function setup(){
    frameRate(5);
    createCanvas(windowWidth, windowHeight);
    accelerationSetup();
    musicSetup();
}

function draw(){
    background(255);
    accelerationDraw();
    musicDraw();
}