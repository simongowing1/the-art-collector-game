class Player {
    constructor() {
        this.height = 140;
        this.width = 100;
        this.x = 50;
        this.y = height - (this.height+20);
    }

    jump() {
        
    }

    draw() {
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}