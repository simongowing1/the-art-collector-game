class Game {
    constructor(){
        this.backgroundImage;

    }
    setup() {
        this.background = new Background();
    
    }
    
    preload() {
        this.backgroundImage = [
            { src:loadImage('assets/empty_gallery_long.jpg'), x: 0, speed: 1.5}
        ]
    }
    
    draw() {
        this.background.draw();
    }
}

