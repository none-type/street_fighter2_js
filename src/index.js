import { Ryu } from './ryu.js';
import { Ken } from './ken.js';
import { Stage } from './stage.js';


// Define an object called GameViewport that holds the game screen dimensions
// Objects are like containers that group related information together
const GameViewport = {
	WIDTH: 384,   // The width of our game area in pixels
	HEIGHT: 224,  // The height of our game area in pixels
	// SCALE: 4,   // This is commented out - would make everything 4x bigger
};

// This function runs automatically when the webpage finishes loading
// window.onload means "wait for all images, styles, etc. to load first"
window.onload = function() {
	// Find the <canvas> element in the HTML (like finding a drawing pad on the page)
	const canvasEl = document.querySelector('canvas');
	
	// Get the 2D drawing tools for our canvas (like getting a paintbrush)
	const context = canvasEl.getContext('2d');

	// Set the actual drawing surface size to match our game viewport dimensions
	canvasEl.width = GameViewport.WIDTH;
	canvasEl.height = GameViewport.HEIGHT;

	const ken = new Ken(80, 110, 1);
	const ryu = new Ryu(80, 110, -1);
	const stage = new Stage();
	

	// Define a function that will be called repeatedly to animate the game
	// Each call to frame() draws one frame of animation
	function frame() {

		ryu.update(context);
		ken.update(context);

		stage.draw(context);
		ryu.draw(context);
		ken.draw(context);

		// This line is commented out - it would clear the entire canvas
		// context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

		

		// These commented lines would draw yellow X lines from corner to corner
		// context.strokeStyle = 'yellow';
		// context.moveTo(0,0);
		// context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
		// context.moveTo(GameViewport.WIDTH, 0);
		// context.lineTo(0, GameViewport.HEIGHT);
		// context.stroke();

		

		// Schedule this same frame() function to run again before the next screen refresh
		// This creates an animation loop (usually 60 frames per second)
		// requestAnimationFrame = Setting an alarm clock that will remind you to call yourself when the time comes
		window.requestAnimationFrame(frame);
	}
	
	// Start the animation by calling frame() for the first time
	window.requestAnimationFrame(frame);

	// This line is commented out - would show the drawing context in console
	//console.log(context);
};