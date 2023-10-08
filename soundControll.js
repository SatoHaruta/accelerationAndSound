//参考URL
//https://codepen.io/lsuddem/pen/RJEYLr



let button;
let osc;

function musicPreload() {
    osc = new Tone.Oscillator({
        frequency: 261.63, // 初期周波数をC4 (261.63 Hz)に設定
        type: 'sine'
    }).toDestination();
}

function musicSetup() {
    button = createButton("Play Sound");
    console.log("button is Created");
    button.position(width / 2 - 50, height / 3);
    button.mousePressed(play1);
}

function musicDraw() {
    osc.frequency.value = accelerationMag * 100;
}

function play1() {
    osc.start();
}



