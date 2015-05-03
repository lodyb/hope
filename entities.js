
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
		this.set_pos(0, 0);
	},

	set_pos: function(x, y) {
		this.x = x;
		this.y = y;
		this.element.style.left = this.x.toString() + 'px';
		this.element.style.top = this.y.toString() + 'px';
	},

};

