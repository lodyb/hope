
/**
 * game object
 */
var Game = {

	element: null,

	/**
	 * children
	 */
	// player: null,
	input: null,
	tick_count: 0,
	tick_interval: null,

	init: function() {
		var that = this;
		this.element = document.getElementsByTagName('canvas')[0];
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

		// this.player = Object.create(Player);
		// this.player.init(this);
		// debug(this.player);
		this.tick_interval = setInterval(function() {
			that.tick();
		}, 1000/30);
	},

	tick: function() {
		// var moving = false;
		// // console.log(this.tick_count);
		this.tick_count++;
		// if (this.input.keys.right) {
		// 	this.player.set_pos(this.player.x + 4, this.player.y);
		// 	moving = true;
		// }
		// if (this.input.keys.left) {
		// 	this.player.set_pos(this.player.x - 4, this.player.y);
		// 	moving = true;
		// }
		// if (this.input.keys.up) {
		// 	this.player.set_pos(this.player.x, this.player.y - 4);
		// 	moving = true;
		// }
		// if (this.input.keys.down) {
		// 	this.player.set_pos(this.player.x, this.player.y + 4);
		// 	moving = true;
		// }

		// if(moving){
		// 	this.player.element.setAttribute('class', 'player moving');
		// } else {
		// 	this.player.element.setAttribute('class', 'player');
		// }
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

// function onResize()
// {
// 	// browser viewport size
// 	var w = window.innerWidth;
// 	var h = window.innerHeight;

// 	// stage dimensions
// 	var ow = 640; // your stage width
// 	var oh = 480; // your stage height

// if (keepAspectRatio)
// {
// 	// keep aspect ratio
// 	var scale = Math.min(w / ow, h / oh);
// 	stage.scaleX = scale;
// 	stage.scaleY = scale;

// 	// adjust canvas size
// 	stage.canvas.width = ow * scale;
// 	stage.canvas.height = oh * scale;
// } else {
// 	// scale to exact fit
// 	stage.scaleX = w / ow;
// 	stage.scaleY = h / oh;

// 	// adjust canvas size
// 	stage.canvas.width = ow * stage.scaleX;
// 	stage.canvas.height = oh * stage.scaleY;
// 	}

// 	// update the stage
// 	stage.update()
// }

window.onresize = function() {
	dbg('test');
	// resize_canvas();
}

/**
 * preload resources
 */
+function(){
	/* todo */
	debug('loading resources');
}();

