
export class Fighter {
	constructor(name, x, y, velocity){
		this.name = name;
		this.image = new Image();
		this.position = {x, y};
		this.velocity = velocity;
		this.frame = [];
	}

	update(secondsPassed, context){
		const [, , width] = this.frame;

		// Move the character horizontally by adding velocity to position
		this.position.x += this.velocity * secondsPassed;  // Since velocity is 1, it moves right 1 pixel per frame

		// Check if character hit the right edge OR left edge of the screen
		if(this.position.x > context.canvas.width - width || this.position.x < 0) {
			// If hit an edge, reverse the direction (1 becomes -1, or -1 becomes 1)
			this.velocity = -this.velocity;
		};
	}
	draw(context){
		const [x, y, width, height] = this.frame;

		// Draw the fighter at its current position (x, y)
		context.drawImage(this.image, x, y, width, height, this.position.x, this.position.y, width, height);
	}
}