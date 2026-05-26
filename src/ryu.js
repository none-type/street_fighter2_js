
// Find all <img> tags in the HTML and assign them to variables
// The first image becomes 'ryu' (the character), the second becomes 'background'
const ryu = document.querySelector('img[alt="ryu"]');


// Create an object to store the character's current position on screen
const position = {
	// Start x position: center of screen minus half the character's width
	// This centers the character horizontally
	x: 80,
	y: 110,  // Fixed vertical position (doesn't change)
};

// Create a variable to track movement direction and speed
// 1 means move right, -1 would mean move left
let velocity = 1;

export function updateRyu(context) {
	// Move the character horizontally by adding velocity to position
	position.x += velocity;  // Since velocity is 1, it moves right 1 pixel per frame

	// Check if character hit the right edge OR left edge of the screen
	if(position.x > context.canvas.width - ryu.width || position.x < 0) {
		// If hit an edge, reverse the direction (1 becomes -1, or -1 becomes 1)
		velocity = -velocity;
	};

};

export function drawRyu(context) {
	// Draw the ryu character at its current position (x, y)
	context.drawImage(ryu, position.x, position.y);
};
