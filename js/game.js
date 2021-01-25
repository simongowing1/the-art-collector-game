class Game {
    constructor(){
        this.backgroundImage;

    }
    setup() {
        this.background = new Background();
    
    }
    
    preload() {
        this.backgroundImage = loadImage('assets/empty_gallery_long.jpg');
    }
    
    draw() {
        console.log('drawing')
        //this.background.draw();
    }
}

