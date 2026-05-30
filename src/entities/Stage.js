
export class Stage {
	constructor() {
		// Find all <img> tags in the HTML and assign them to variables
		// The first image becomes 'ryu' (the character), the second becomes 'background'
		this.image = document.querySelector('img[alt="background"]');
	}

	update() {	}
	
	draw(context){
		// Draw the background image at position (0,0) which is top-left corner
		context.drawImage(this.image, 0, 0);
	}
}



