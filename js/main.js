const game = new Game();
let song;

function preload() {
    game.preload();
}

function setup() {
   //  song = loadSound('assets/01 Windowlicker.mp3');
    createCanvas (1000,550)
    game.setup();   
}

function draw() {
    game.draw();
   
}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
} 




//window.onload = function () {
   // var oneMinute = 60,
   //     display = document.getElementsByClassName("countdown");
    
//};
