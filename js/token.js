class Token {
    constructor(image){
        this.image = image;
        this.x = WIDTH
        this.y = (Math.random() * 600) / 2.5 
        this.width = 150;
        this.height = 120;
    }

    draw() {
        this.x--;
        image(game.tokenImage1, this.x, this.y, this.width, this.height)
        //image(game.tokenImage2, this.x, this.y, this.width, this.height)
        //image(game.tokenImage3, this.x, this.y, this.width, this.height)

    }
    
    collision(playerInfo) {
        let playerScore = document.getElementById("scoreboard")
        let tokenMiddleX = this.x + this.width / 2;
        let tokenMiddleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y;
        let scoreboard = document.getElementById("scoreboard")
        if (dist(tokenMiddleX, tokenMiddleY, playerX, playerY) > this.height / 2) {
            
            return false
        } else {
            game.saleSound.play();
            game.player.score += 5;
            scoreboard.addName += "pointsAdded";
            playerScore.innerHTML = `Collection Value: $${game.player.score},000,000`
            return true  
        }

    }

}