class Game {
    constructor() {
        this.backgroundImage;
        this.tokenImage;
        this.music;

    }
    setup() {
        this.background = new Background();
        this.player = new Player();
        this.tokens = [];
    }
    
    preload() {
        this.backgroundImage = [
            { src:loadImage('assets/empty_gallery_long.jpg'), x: 0, speed: 1.5}
        ]
        this.playerImage = loadImage('assets/Player1.png');
        this.tokenImage = loadImage('assets/token1.png');
       // this.music = loadSound('assets/01 Windowlicker.mp3')
    }
    
    draw() {
        clear(); 
        this.background.draw();
        
        //console.log('hello')
        if (frameCount === 50 || frameCount % 500 === 0) {
            this.tokens.push(new Token(this.tokenImage))
            //console.log('now');
        }

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
                    console.log('too slow!')
                    return false
                } else {
                    return true
                }
            })
        this.player.draw();

        
}

}
