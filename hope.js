
/**
 * globals
 */
var game = null;
var input = null;

/**
 * main game object
 */
var Game = {

	player: null,

	init: function() {
		input = Object.create(Input);

		/**
		 * configure input
		 */
		input.init(this, document, [
			{name: 'up', code: [38, 87],
				preventDefault: true, callback: null},
			{name: 'down', code: [40, 83],
				preventDefault: true, callback: null},
			{name: 'left', code: [37, 65],
				preventDefault: true, callback: null},
			{name: 'right', code: [39, 68],
				preventDefault: true, callback: null},
		]);

		/**
		 * init phaser
		 */
		game = new Phaser.Game(640, 360, Phaser.AUTO, 'main', {
			preload: this.preload, create: this.create});
	},

	/**
	 * preload resources
	 */
	preload: function() {
		game.load.image('logo', 'res/test.png');
	},

	/**
	 * resources loaded - init game
	 */
	create: function() {
		this.player = Object.create(Player);
		this.player.init();
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
	},
};

/**
 * resources loaded - init game
 */
window.onload = function() {
	debug('hope started', 'success');
	var game = Object.create(Game);
	game.init();
};

