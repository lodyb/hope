
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
	},

	set_pos: function(x, y) {
		this.x = x;
		this.y = y;
	},

};

