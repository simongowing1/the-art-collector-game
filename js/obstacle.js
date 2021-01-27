class Obstacle {
    constructor() {
        this.height = 250;
        this.width = 130;
        this.x = WIDTH;
        this.y = 300;
        this.image = game.obstacleImage;
    }
    
    draw(){
        
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(playerInfo) {
        //console.log(playerInfo.y)
        let playerScore = document.getElementById("scoreboard")
        let obstacleMiddleX = this.x + this.width / 2;
        let obstacleMiddleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        //let scoreboard = document.getElementById("scoreboard")
        if (dist(obstacleMiddleX, obstacleMiddleY, playerX, playerY) > this.width) {
            return false
        } else {
           // console.log('collision')
        game.breakingSound.play(); 
           game.player.score -= 7;
          //  scoreboard.addName += "pointsAdded";
            playerScore.innerHTML = `Collection Value: $${game.player.score},000,000`
            return true  
        }

    }



}
     