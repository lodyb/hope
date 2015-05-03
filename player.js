
/**
 * player object
 */
var Player = {

	parent: null,

	/**
	 * todo: wrap sprite positions to these variables
	 */
	x: null,
	y: null,

	init: function(parent) {
		this.parent = parent;
		this.x = 0;
		this.y = 0;
		this.sprite = game.add.sprite(this.x, this.y,
			'spritesheets/player_dev');
		debug(this.sprite);
		this.sprite.anchor.setTo(0.5, 1);

		/**
		 * configure animations
		 */
		this.sprite.animations.add('walk', [0, 1, 2, 3], 6, true);
		this.sprite.animations.add('idle', [0], 1, false);
		this.sprite.animations.add('jump', [5], 1, false);
		this.sprite.animations.add('float', [4], 1, false);
		this.sprite.animations.add('spawn', [7, 6, 0], 10, false);
		this.sprite.animations.add('despawn', [6, 7], 10, false);

		game.physics.arcade.enable(this.sprite);
		game.physics.arcade.enableBody(this.sprite);
		this.sprite.body.collideWorldBounds = true;
		this.sprite.body.gravity.y = 800;

		/**
		 * debug only
		 */
		this.sprite.inputEnabled = true;
		this.sprite.input.enableDrag(false, true);

		this.sprite.animations.play('spawn');
	},

	/**
	 * process input
	 */
	update: function() {
		
		debug('update');
		/**
		 * debug only
		 */
		if (this.sprite.input.isDragged) {
			this.sprite.animations.play('idle');
			game.camera.follow(null);
			this.sprite.body.gravity.y = 0;
		}
		else {
			game.camera.follow(this.sprite);
			this.sprite.body.gravity.y = 800;
		}

		this.sprite.body.velocity.x = 0;
		if (input.keys.left) {
			/**
			 * flip sprite for moving left
			 */
			this.sprite.scale.x = 1;
			
			if (this.sprite.body.blocked.down) {
				this.sprite.animations.play('walk');
			}
			this.sprite.body.velocity.x = -128;
		}
		else if (input.keys.right) {
			/**
			 * flip sprite for moving right
			 */
			this.sprite.scale.x = -1;

			if (this.sprite.body.blocked.down) {
				this.sprite.animations.play('walk');
			}
			this.sprite.body.velocity.x = 128;
		}
		else {
			if (this.sprite.body.blocked.down) {
				this.sprite.animations.play('idle');
			}
		}
	}

};

