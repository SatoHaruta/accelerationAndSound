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
    pane.on('change', (ev) => {
        magRatio = ev.value;
    });
    musicDraw();
}