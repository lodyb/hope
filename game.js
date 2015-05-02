
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
		var that = this;
		this.element = document.getElementsByTagName('main')[0];
		debug(this);
		this.input = Object.create(Input);

		/**
		 * configure input
		 */
		this.input.init(this, document, [
			{name: 'up', code: [38, 87],
				preventDefault: true, callback: null},
			{name: 'down', code: [40, 83],
				preventDefault: true, callback: null},
			{name: 'left', code: [37, 65],
				preventDefault: true, callback: null},
			{name: 'right', code: [39, 68],
				preventDefault: true, callback: null},
		]);
		debug(this.input);

		this.player = Object.create(Player);
		this.player.init(this);
		debug(this.player);
		this.tick_interval = setInterval(function() {
			that.tick();
		}, 1000/10);
	},

	tick: function() {
		// console.log(this.tick_count);
		this.tick_count++;
		if (this.input.keys.right) {
			this.player.set_pos(this.player.x + 4, this.player.y);
		}
		if (this.input.keys.left) {
			this.player.set_pos(this.player.x - 4, this.player.y);
		}
		if (this.input.keys.up) {
			this.player.set_pos(this.player.x, this.player.y - 4);
		}
		if (this.input.keys.down) {
			this.player.set_pos(this.player.x, this.player.y + 4);
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

