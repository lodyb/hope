
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
	 * map of keycodes to keynames (used for key state)
	 */
	key_codes: {},

	/**
	 * element to listen for key events on
	 * keys: [{name: 'name', code: n,
	 * 		preventDefault: true, callback: null}, ...]
	 */
	init: function(parent, element, keys) {
		this.parent = parent;
		this.element = element;
		if ((typeof(keys.length) == 'undefined') || (keys.length <= 0))
			debug('missing parameters in Input.init(.., .., keys)',
				'warning');
		for (var i = 0; i < keys.length; i++) {
			if ((typeof(keys[i].name) == 'undefined') ||
				(typeof(keys[i].code) == 'undefined') ||
				(typeof(keys[i].preventDefault) == 'undefined') ||
				(typeof(keys[i].callback) == 'undefined')) {
				debug('missing parameter in Input.init(.., .., keys)',
					'warning');
				continue;
			}
			this.keys[keys[i].name] = false;
			this.key_codes[keys[i].code] = {
				name: keys[i].name,
				preventDefault: keys[i].preventDefault,
				callback: keys[i].callback,
			}
		}
		var that = this;
		this.element.addEventListener('keydown', function(e) {
			that.on_keydown(e);
		});
		this.element.addEventListener('keyup', function(e) {
			that.on_keyup(e);
		});
	},

	on_keydown: function(e) {
		var c = (e.keyCode ? e.keyCode : e.which);
		
		if (typeof(this.key_codes[c]) != 'undefined') {
			var key = this.key_codes[c];
			if (key.preventDefault) {
				if (e.stopPropagation) e.stopPropagation();
				e.preventDefault();
			}
			if (!this.keys[key.name] && !e.repeat) {
				this.keys[key.name] = true;
				if (key.callback) key.callback(true);
				debug(e);
			}
		};
	},

	on_keyup: function(e) {
		var c = (e.keyCode ? e.keyCode : e.which);
		if (typeof(this.key_codes[c]) != 'undefined') {
			var key = this.key_codes[c];
			if (key.preventDefault) {
				if (e.stopPropagation) e.stopPropagation();
				e.preventDefault();
			}
			this.keys[key.name] = false;
			if (key.callback) key.callback(false);
			debug(e);
		}
	},

};

