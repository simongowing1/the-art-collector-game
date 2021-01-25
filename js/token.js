class Token {
    constructor(){
        this.x = width - this.width;
        this.y = (Math.random() * height)
        this.width = 400;
        this.height = 200;
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }

}