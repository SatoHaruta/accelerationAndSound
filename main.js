function preload(){
    musicPreload();
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    accelerationSetup();
    musicSetup();
}

function draw(){
    background(255);
    accelerationDraw();
    musicDraw();
}