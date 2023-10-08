
let player;


function preload(){
    player = new Tone.Player("music.wav").toDestination();
    player.loop = false;
    player.autostart = false;
}

function soundSetup() {
    window.addEventListener('click', () =>{
        playMusic();
    });
}

function playMusic(){
    player.loop = true;
    player.autostart = true;
}