
/**
 * game object
 */
var Game = {

	element: null,

	/**
	 * children
	 */
	player: null,
	input: null,

	init: function() {
		this.eleement = document.getElementsByTagName('main')[0];
		debug(this);
		this.input = Object.create(Input);
		this.input.init(this, document);
		debug(this.input);
		this.player = Object.create(Player);
		this.player.init(this);
		debug(this.player);
	},

};

/**
 * resources loaded - init game
 */
window.onload = function() {
	debug('loaded resources', 'success');
	var game = Object.create(Game);
	game.init();
};

/**
 * preload resources
 */
+function(){
	/* todo */
	debug('loading resources');
}();

