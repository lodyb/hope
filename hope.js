
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
		this.bkg = null;

		/**
		 * map data
		 */
		this.map = null;
		this.map_base = null;
		this.map_collide = null;

		/**
		 * extra dom events
	 	 */
		window.addEventListener('resize', function(e) {
			try_resize_game();
		});
		try_resize_game();
	},

	/**
	 * preload resources
	 */
	preload: function() {
		debug('preloading resources');
		game.load.image('sprites/space_bkg', 'res/sprites/space_bg.png');
		game.load.image('tilesheets/dev', 'res/tilesheets/dev.png');
		game.load.spritesheet('spritesheets/player_dev',
			'res/spritesheets/player_dev.png', 32, 32, 8);
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
		this.bkg = game.add.tileSprite(0, 0, game.width, game.height,
			'sprites/space_bkg');
		this.map = game.add.tilemap('maps/test');

		/**
		 * todo: make new dev/test map with more relevant tileset name
		 */
		this.map.addTilesetImage('wex_dev', 'tilesheets/dev');

		this.map_base = this.map.createLayer('base');
		this.map_base.visible = true;

		this.map_collide = this.map.createLayer('collision');
		this.map_collide.visible = false;
		this.map_collide.immovable = true;
		this.map_collide.enableBody = true;

		this.map.setCollision([36], true, this.map_collide);
		game.world.setBounds(0, 0, 640, 360);
		this.map_base.resizeWorld();

		/**
		 * bring player into the world
		 */
		this.player = Object.create(Player);
		this.player.init();
		game.camera.follow(this.player.sprite,
			Phaser.Camera.FOLLOW_PLATFORMER);
	},

	update: function() {
		game.physics.arcade.collide(this.player.sprite,
			this.map_collide);
		this.player.update();
	},
};

/**
 * helper function to resize game
 */
var resize_game = function(x, y) {
	// debug('resized game to ' + x.toString() + 'x' + y.toString());
	// game.stage.smoothed = false;
	// game.width = x;
	// game.height = y;
	// game.canvas.width = x;
	// game.canvas.height = y;
	// game.world.setBounds(0, 0, x, y);
	// game.scale.width = x;
	// game.scale.height = y;
	// game.camera.setSize(x, y);
	// game.camera.setBoundsToWorld();
	// if (game.debug.sprite) {
	// 	game.stage.removeChild(game.debug.sprite);
	// 	game.debug.sprite = null;
	// 	game.debug.textureFrame = null;
	// 	if (game.debug.texture) {
	// 		game.debug.texture.destroy();
	// 	}
	// 	game.debug.texture = null;
	// 	if (game.debug.baseTexture) {
	// 		game.debug.baseTexture.destroy();
	// 	}
	// 	game.debug.baseTexture = null;
	// 	game.debug.context = null;
	// 	game.debug.canvas = null;
	// 	game.debug.boot();
	// }
	// game.renderer.resize(x, y);
	// game.scale.setSize();
	// game.scale.refresh();
	game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
	game.stage.scale.setShowAll();
	game.stage.scale.refresh();
}

/**
 * helper function to resize game based on window width/height
 * will only resize when necessary
 */
var try_resize_game = function() {
	if (window.innerWidth < 1280 || window.innerHeight <= 720) {
		if (game.width != 640 && game.height != 320) {
			// resize_game(640, 320);
		}
	}
	else if (window.innerWidth < 1920 || window.innerHeight < 1080) {
		if (game.width != 1280 && game.height != 720) {
			// resize_game(1280, 720);
		}
	}
	else if (window.innerWidth >= 1920 && window.innerHeight >= 1080) {
		if (game.width != 1920 && game.width != 1080) {
			// resize_game(1280, 720);
		}
	}
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
	input.init(document);
	input.bind([
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

