
const GameViewport = {
	WIDTH: 384,
	HEIGHT: 224,
	// SCALE: 4,
};

window.onload = function() {
	const canvasEl = document.querySelector('canvas');
	const context = canvasEl.getContext('2d');

	canvasEl.width = GameViewport.WIDTH;
	canvasEl.height = GameViewport.HEIGHT;

	// canvasEl.style.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`;
	// canvasEl.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`;

	const ryu = document.querySelector('img');
	
	context.strokeStyle = 'yellow';
	context.moveTo(0,0);
	context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
	context.moveTo(GameViewport.WIDTH, 0);
	context.lineTo(0, GameViewport.HEIGHT);
	context.stroke();

	context.drawImage(ryu, 0, 224 - 89);

	console.log(context);
}