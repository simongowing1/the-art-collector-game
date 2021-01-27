class Game {
    constructor() {
        this.backgroundImage;
        this.tokenImage;
        

    }
    setup() {
        this.background = new Background();
        this.player = new Player();
        this.tokens = [];
        this.obstacles = [];
    }
    
    preload() {
        this.backgroundImage = [
            { src:loadImage('assets/empty_gallery_long.jpg'), x: 0, speed: 1.5}
        ]
        this.playerImage = loadImage('assets/Player1-frnt.png');
        this.playerImageBk = loadImage('assets/Player1_bk.png');
        this.tokenImage1 = loadImage('assets/token1.png');
        this.tokenImage2 = loadImage('assets/token2.png');
        this.tokenImage3 = loadImage('assets/token3.png');
        this.obstacleImage = loadImage('assets/Obstacle1.png');
        this.backgroundMusic = createAudio('assets/01 Windowlicker.mp3');
        this.jumpSound = createAudio('assets/jump.mp3');
        this.saleSound = createAudio('assets/Sale.m4a');
        this.breakingSound = createAudio('assets/breaking.m4a')
    }
    
    draw() {
        clear(); 
        this.background.draw();
        //console.log('hello')
        if (frameCount === 10 || frameCount % 500 === 0) {
            this.tokens.push(new Token(this.tokenImage1))
            //console.log('now');
        }

        // if (frameCount % 1200 === 0) {
        //    this.tokens.push(new Token(this.tokenImage2))
        //}

        this.tokens.forEach(function (token) {
            token.draw();
        })

        this.tokens = this.tokens.filter(
            (token) => {
                if (token.collision(this.player))
                {
                    console.log('got it!');
                    return false
                } else if (token.x < 0 - token.width) {
                    return false
                } else {
                    return true
                }
            })
        
            this.player.draw();

            if (frameCount === 300 || frameCount % 1200 === 0) {
                this.obstacles.push(new Obstacle(this.obstacleImage))
                //console.log('now');
            }

            this.obstacles.forEach(function (obstacle) {
                obstacle.draw();
            })

            
            this.obstacles = this.obstacles.filter(
                (obstacle) => {
                    if (obstacle.collision(this.player))
                    {
                       // console.log('CRASH');
                        return false
    
                    } else {
                        return true
                    }
                })    
  

    
       

        
}

}
