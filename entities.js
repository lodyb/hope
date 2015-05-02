
/**
 * player object
 */
var Player = {

	element: null,
	parent: null,
	x: null,
	y: null,

	init: function(parent) {
		this.parent = parent;
		this.element = document.createElement('div');
		this.element.setAttribute('class', 'player');
		this.parent.element.appendChild(this.element);
	},

	set_pos: function(x, y) {
		this.x = x;
		this.y = y;
	},

};

