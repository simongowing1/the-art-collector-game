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

    }
    
    collision(playerInfo) {
        let playerScore = document.getElementById("score")
        let tokenMiddleX = this.x + this.width / 2;
        let tokenMiddleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 3;
        //let scoreboard = document.getElementById("scoreboard")
        if (dist(tokenMiddleX, tokenMiddleY, playerX, playerY) > this.height / 2) {
            
            return false
        } else {
            if (countdown.innerHTML !== 'Countdown: 00:00'){
                game.saleSound.play();
                //console.log(countdown.innerHTML)
                game.player.score += 5;
                //game.player.gravity += 1;
                //playerScore.addName = "pointsAdded";
                playerScore.innerHTML = `Collection Value: $${game.player.score},000,000`
                return true 
            }
            
        }

    }

}