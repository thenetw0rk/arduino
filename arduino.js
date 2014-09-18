'use strict';

var j5 = require('johnny-five');

module.exports = function(sio, config) {
	var bpard = new j5.Board(config.arduino.board);
	var relay, button;

	board.on('ready', function() {
		relay = new j5.Relay(config.arduino.relay);
		button = new j5.Button(config.arduino.button);

		button.on('press', function() {
			relay.toggle();
		});

		this.ready = true;
	});

	sio.sockets.on('connection', function(socket) {
		if (board.ready) {
			socket.emit('relay:status', led.isOn ? 'on' : 'off');

			button.on('press', function() {
				socket.emit('relay:status', led.isOn ? 'on' : 'off');
			});

			socket.on('relay:toggle', function() {
				relay.toggle();
				sio.sockets.emit('relay:status', led.isOn ? 'on' : 'off');
			});
		}
	});
};
