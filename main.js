function preload() {
    musicPreload();
}

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    accelerationSetup();
    musicSetup();
}

function draw() {
    background(255);
    accelerationDraw();
    musicDraw();
    pane.on('change', (ev) => {
        magRatio = ev.value;
    });
    console.log(magRatio);
}