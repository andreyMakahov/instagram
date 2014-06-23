'use strict';

angular.module('app', [
		'ngRoute',
		'ngResource',
		'app.filters',
		'app.services',
		'app.directives',
		'app.controllers'
	]).
	
	constant('CLIENT_ID', "ec36f66dd37d4739a716105d15c69ce4").
	constant('CLIENT_SECRET', "8354273cf7a54c0aab51aeaee657a991").
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
