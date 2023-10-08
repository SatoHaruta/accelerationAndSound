function preload(){
    musicPreload();
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    accelerationSetup();
    musicSetup();
}

function draw(){
    accelerationDraw();
    musicDraw();
}