
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
	tick_count: 0,
	tick_interval: null,

	init: function() {
		this.element = document.getElementsByTagName('main')[0];
		debug(this);
		this.input = Object.create(Input);
		this.input.init(this, document, [
			{name: 'w', code: 87, preventDefault: true, callback: null},
			{name: 'down', code: [40, 83], preventDefault: true, callback: null},
		]);
		debug(this.input);
		this.player = Object.create(Player);
		this.player.init(this);
		debug(this.player);
		var that = this;
		this.tick_interval = setInterval(function() { that.tick(); }, 1000/10);
	},

	tick: function() {
		// console.log(this.tick_count);
		this.tick_count++;
		if (this.input.keys.w) {
			debug('w key pressed down');
		}
		if (this.input.keys.down) {
			debug('down key (s or downarrow) pressed down');
		}
	}

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

