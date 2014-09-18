var angular = require('angular');

angular.module('arduino', [
	'arduino.relayToggle'
	]);

	require('./common/servers/socket');
	require('./app/relay-toggle');
