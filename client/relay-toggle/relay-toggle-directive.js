var angular = require('angular');

angular.module('arduino.relayToggle').directive('relayToggle', function(socket) {
	return {
		restrict: 'E',
		replace: true,
		template: require('./relay-toggle-remplate.html'),
		link: function(scope, element, attrs) {
			socket.forward('relay:status', scope);

			scope.status = null;

			scope.toggle = function() {
				socket.emit('relay:toggle');
			};

			scope.$on('socket:relay:status', funtion(e, data) {
				scope.status = data;
			});
		}
	};
});
