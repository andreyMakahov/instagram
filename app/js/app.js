'use strict';

angular.module('app', [
		'ngRoute',
		'ngResource',
		'app.filters',
		'app.services',
		'app.directives',
		'app.controllers'
	]).
	
	constant('CLIENT_ID', "e5127ff493e448e89b047488b84413d4").
	constant('CLIENT_SECRET', "cd697835aa634258aaf8d601ee68f82c").
	constant('WEB_SITE_URL', "http://andreymakahov.github.io/instagram/").
	
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when("/photos", {
				templateUrl:"templates/main",
				controller:"ControllerMain"
			}).
			when("/photos/:id", {
				templateUrl:"templates/photo",
				controller:"ControllerPhoto"
			}).
			otherwise({redirectTo: '/'});
}]);
