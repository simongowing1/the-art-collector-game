class Game {
    constructor(){
        this.backgroundImage;

    }
    setup() {
        this.background = new Background();
        this.player = new Player();
    }
    
    preload() {
        this.backgroundImage = [
            { src:loadImage('assets/empty_gallery_long.jpg'), x: 0, speed: 1.5}
        ]
        this.playerImage = loadImage('assets/Player1.png');
    }
    
    draw() {
        this.background.draw();
        this.player.draw();
    }
}

