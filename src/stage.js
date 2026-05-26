// Find all <img> tags in the HTML and assign them to variables
// The first image becomes 'ryu' (the character), the second becomes 'background'
const background = document.querySelector('img[alt="background"]');

export function drawBackground(context) {
	// Draw the background image at position (0,0) which is top-left corner
	context.drawImage(background, 0, 0);

};

