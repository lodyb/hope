
/**
 * input object
 */

var Input = {

	element: null,
	parent: null,

	/**
	 * key state - true = pressed, false = unpressed
	 */
	keys: {},

	/**
	 * element to listen for key events on
	 */
	init: function(parent, element) {
		this.parent = parent;
		this.element = element;
		this.element.addEventListener('keydown', this.on_keydown);
		this.element.addEventListener('keyup', this.on_keyup);
	},

	on_keydown: function(e) {
		debug(e);
	},

	on_keyup: function(e) {
		debug(e);
	},

};

