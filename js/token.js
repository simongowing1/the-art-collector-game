class Token {
    constructor(image){
        this.image = image;
        this.x = WIDTH
       this.width;
        this.y = (Math.random() * 600) / 2.5 
        this.width = 150;
        this.height = 120;
    }

    draw() {
        this.x--;
        image(game.tokenImage, this.x, this.y, this.width, this.height)
    }
    collision(playerInfo) {
        let playerScore = document.getElementById("scoreboard")
        // get the middle of the coin
        let tokenMiddleX = this.x + this.width / 2;
        let tokenMiddleY = this.y + this.height / 2;
        // get the middle of the player
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y;
        // use p5 dist() function to measure distance between two objects
        if (dist(tokenMiddleX, tokenMiddleY, playerX, playerY) > 25) {
            return false
        } else {
            // collision was detected
            game.player.score += 10;
            playerScore.innerHTML = `Value: $${game.player.score},000,000`
            //console.log('collision', playerInfo);
            return true  
        }

    }

}