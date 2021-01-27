const game = new Game();

function preload() {
    game.preload();
    //game.backgroundMusic.play();
}

function setup() {
        createCanvas (1000,550);
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
        game.player.image = game.playerImage
    }

    if (keyCode === 37) {
        game.player.moveBack();
        game.player.image = game.playerImageBk   
    }

    if (keyCode === 13) {
        game.countdown.timeIt();
    }

    

} 




//window.onload = function () {
   // var oneMinute = 60,
   //     display = document.getElementsByClassName("countdown");
    
//};
