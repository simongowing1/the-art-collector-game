const game = new Game();

function preload() {
    game.preload();
    
}

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
        game.setup();
       
}

function draw() {
    game.draw();
   
}

function keyPressed() {
    if (keyCode === 32) {
        if (countdown.innerHTML !== 'Countdown: 00:00'){
            game.player.jump();
            game.jumpSound.play();
        }
        
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
        //let timesupHtml = document.querySelector(".timesup");
        let interval = setInterval(timeIt, 1000);
        canvasHtml.classList.remove("hidden");
            game.backgroundMusic.play();
    
    if (keyCode === 27) {
        window.location.reload()
    }

    }

    

} 




//window.onload = function () {
   // var oneMinute = 60,
   //     display = document.getElementsByClassName("countdown");
    
//};
