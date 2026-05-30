import { Ryu } from './entities/fighters/Ryu.js';
import { Ken } from './entities/fighters/Ken.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/FpsCounter.js';


// Define an object called GameViewport that holds the game screen dimensions
// Objects are like containers that group related information together
const GameViewport = {
	WIDTH: 384,   // The width of our game area in pixels
	HEIGHT: 224,  // The height of our game area in pixels
	// SCALE: 4,   // This is commented out - would make everything 4x bigger
};

// This function runs automatically when the webpage finishes loading
// window.onload means "wait for all images, styles, etc. to load first"
window.addEventListener('load', function() {
	// Find the <canvas> element in the HTML (like finding a drawing pad on the page)
	const canvasEl = document.querySelector('canvas');
	
	// Get the 2D drawing tools for our canvas (like getting a paintbrush)
	const context = canvasEl.getContext('2d');

	// Set the actual drawing surface size to match our game viewport dimensions
	canvasEl.width = GameViewport.WIDTH;
	canvasEl.height = GameViewport.HEIGHT;


	const entities = [
		new Stage(),
		new Ken(80, 110, 150),
		new Ryu(80, 110, -150),
		new FpsCounter(),
	];

	

	let previousTime = 0;
	let secondsPassed = 0;
	

	function frame(time) {
		window.requestAnimationFrame(frame);

		secondsPassed = (time - previousTime) / 1000;
		previousTime = time;

		for (const entity of entities) {
			entity.update(secondsPassed, context);
		}

		for (const entity of entities) {
			entity.draw(context);
		}

		

	}
	
	// Start the animation by calling frame() for the first time
	window.requestAnimationFrame(frame);

});