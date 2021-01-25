const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas (1000,600)
    game.setup();
}

function draw() {
    game.draw();
}