//参考URL
//https://codepen.io/lsuddem/pen/RJEYLr



let button;
let osc;
let magRatio;

function musicPreload() {
    osc = new Tone.Oscillator({
        frequency: 100.0, // 初期周波数をC4 (261.63 Hz)に設定
        type: 'sine'
    }).toDestination();
}


function musicSetup() {
    button = createButton("Play Sound");
    console.log("button is Created");
    button.position(width / 2 - 50, height / 3);
    button.mousePressed(play1);
    magRatio = 50;
}

function musicDraw() {
    osc.frequency.value = accelerationMag * magRatio;
    console.log(osc.frequency.value);
}

function play1() {
    osc.start();
}



