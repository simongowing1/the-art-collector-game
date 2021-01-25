const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas (1000,400)
    game.setup();
}

function draw() {
    game.draw();
}