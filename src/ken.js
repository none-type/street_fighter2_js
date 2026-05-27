import { Fighter } from './fighter.js';

export class Ken extends Fighter {
	constructor(x, y, velocity) {
		super('ken', x, y, velocity);

	// Find all <img> tags in the HTML and assign them to variables
	// The first image becomes 'ryu' (the character), the second becomes 'background'
	this.image = document.querySelector('img[alt="ken"]');

	}
}



