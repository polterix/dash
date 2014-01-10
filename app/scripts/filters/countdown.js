'use strict';

angular.module('dashApp')
	.filter('countdown', function() {
		return function(input) {
			if (input > 0) {
				var d = Math.floor(input / 86400),
					h = Math.floor((input - (d * 86400)) / 3600),
					m = Math.floor((input - (d * 86400) - (h * 3600)) / 60),
					s = input - (d * 86400) - (h * 3600) - (m * 60),
					result = h + 'h ' + m + 'm ' + s + 's';

				if (d > 0) {
					result = d + 'j ' + result;
				}
				return result;
			} else {
				return 'Terminé !';
			}
		};
	});