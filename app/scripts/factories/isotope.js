angular.module('isotope', [])
	.factory('isotopeService', ['$document', '$q', '$rootScope',
		function($document, $q, $rootScope) {
			var d = $q.defer();

			function onScriptLoad() {
				// Load client in the browser
				$rootScope.$apply(function() {
					d.resolve(window.isotope);
				});
			}

			// Create a script tag with isotope as the source
			var scriptTag = $document[0].createElement('script');
			scriptTag.type = 'text/javascript';
			scriptTag.async = true;
			scriptTag.src = 'bower_components/isotope/jquery.isotope.js';
			scriptTag.onreadystatechange = function() {
				if (this.readyState == 'complete') onScriptLoad();
			}
			scriptTag.onload = onScriptLoad;

			var s = $document[0].getElementsByTagName('body')[0];
			s.appendChild(scriptTag);

			return {
				isotope: function() {
					return d.promise;
				}
			};
		}
	]);