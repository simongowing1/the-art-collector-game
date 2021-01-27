class Player {
    constructor() {
        this.height = 200;
        this.width = 140;
        this.velocity = 0;
        this.gravity = 0.1;
        this.x = 50;
        this.y = height - (this.height + 20);
        this.score = 0;
        this.image = game.playerImage; 
    }

    jump() {
       // console.log('jumping');
        this.velocity = - 8
    }

    moveForward() {
       // console.log('move forward')
        if(this.x < WIDTH - this.width) {
            this.x +=5
        }
    }

    moveBack() {
        if (this.x > 0) {
            this.x -= 5;
        }    
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

        image(this.image, this.x, this.y, this.width, this.height);

     //   if (this.moveBack()){
     //       image(game.playerImageBk, this.x, this.y, this.width, this.height);
     //   }
    } 
}

/*
if (keyIsDown(UP_ARROW)) {
    this.moveUp();
    this.image = this.playerImageUp
  }
  if (keyIsDown(DOWN_ARROW)) {
    this.moveDown();
    this.image = this.playerImageDown
  }
  if (keyIsDown(LEFT_ARROW)) {
    this.moveLeft();
    this.image = this.playerImageLeft
  }
  if (keyIsDown(RIGHT_ARROW)) {
    this.moveRight();
    this.image = this.playerImageRight
}
*/