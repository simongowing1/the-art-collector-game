class Player {
    constructor() {
        this.height = 200;
        this.width = 140;
        this.velocity = 0;
        this.gravity = 0.1;
        this.x = 50;
        this.y = height - (this.height + 20);
        this.score = 0;
    }

    jump() {
        console.log('jumping');
        this.velocity = - 8
    }

    scorePoint() {
        
    }

    draw() {
        this.velocity += this.gravity; 
        this.y += this.velocity;
       
        if (this.y >= height - (this.height + 20))  { 
            this.y = height - (this.height + 20);
        }

        if (this.y < 0)  { 
            this.velocity = 0;
        }

        image(game.playerImage, this.x, this.y, this.width, this.height);

    } 
}