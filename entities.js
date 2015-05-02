
/**
 * player object
 */
var Player = {

	parent: null,
	x: null,
	y: null,

	init: function(parent) {
		this.parent = parent;;
		this.set_pos(0, 0);
	},

	set_pos: function(x, y) {
		this.x = x;
		this.y = y;
	},

};

