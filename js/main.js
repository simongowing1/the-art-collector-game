const game = new Game();
let song;

function preload() {
    game.preload();
    // game.backgroundMusic.play();
}

function setup() {
    createCanvas (1000,550)
    game.setup();   
}

function draw() {
    game.draw();
   
}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
        game.jumpSound.play();

    }

    if (keyCode === 39) {
        game.player.moveForward();
    }

    if (keyCode === 37) {
        game.player.moveBack();
        game.player.image = game.playerImageBk   
    }
} 




//window.onload = function () {
   // var oneMinute = 60,
   //     display = document.getElementsByClassName("countdown");
    
//};
