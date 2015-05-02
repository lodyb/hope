
/**
 * globals
 */
game = null;
input = null;

/**
 * main game object class
 */
var HopeGame = {

	init: function() {
		this.player = null;
	},

	/**
	 * preload resources
	 */
	preload: function() {
		debug('preloading resources');
		game.load.image('sprites/space_bkg', 'res/sprites/space_bg.png');
		game.load.image('tilesheets/dev', 'res/tilesheets/dev.png');
		game.load.spritesheet('spritesheets/player_dev',
			'res/spritesheets/player_dev.png');
		game.load.tilemap('maps/test', 'res/maps/test.json', null,
			Phaser.Tilemap.TILED_JSON);
	},

	/**
	 * resources loaded - init game
	 */
	create: function() {
		debug('preloaded resources', 'success');
		debug('starting game');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = Object.create(Player);
		this.player.init();
	},
};

/**
 * init game objects
 */
window.onload = function() {
	debug('hope started', 'success');

	/**
	 * configure input
	 */
	input = Object.create(Input);
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
	game = new Phaser.Game(640, 360, Phaser.AUTO, 'main');

	/**
	 * game states
	 */
	game.state.add('main', HopeGame);

	/**
	 * init state chain
	 */
	game.state.start('main');
};

