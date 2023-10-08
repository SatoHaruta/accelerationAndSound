//参考URL
//https://codepen.io/lsuddem/pen/RJEYLr

let player;

let shifter;
let button;

let baseURL = "music.wav";

function musicPreload() {

    shifter = new Tone.PitchShift(2).toMaster();

    player = new Tone.Player(baseURL).connect(shifter);
    player.loop = true;
}

function musicSetup() {
    button = createButton("Play Sound");
    console.log("button is Created");
    button.position(width / 2 - 50, height / 3);
    button.mousePressed(play1);
}

function musicDraw() {
    shifter.pitch = map(mouseX, 0, windowWidth, -3, 3);
}

function play1() {
    player.start();
}



