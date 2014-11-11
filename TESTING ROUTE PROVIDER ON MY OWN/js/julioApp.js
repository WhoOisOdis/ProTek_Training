var julioApp = angular.module('myApp', ['ngRoute']);

julioApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'DetailsCtrl'
	}).
	when('/details/:num', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsCtrl'
	}).
	otherwise({
		redirectTo: '/home'
	})
}]);

julioApp.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data) {
		$scope.people = data;
		$scope.itemNum = $routeParams.num;
	});
}]);











































// var julioApp = angular.module('myApp', ['ngRoute']);

// julioApp.config(['$routeProvider', function($routeProvider) {
// 	$routeProvider.
// 	when('/home', {
// 		templateUrl: 'partials/home.html',
// 		controller: 'DetailsCtrl'
// 	}).
// 	when('/details/:num', {
// 		templateUrl: 'partials/details.html',
// 		controller: 'DetailsCtrl'
// 	}).
// 	otherwise({
// 		redirectTo: '/home'
// 	})
// }]);

// julioApp.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
// 	$http.get('js/data.json').success(function(data) {
// 		$scope.people = data;
// 		$scope.itemNum = $routeParams.num;
// 	});
// }]);


// var julioApp = angular.module('myApp', ['ngRoute']);

// julioApp.config(['$routeProvider', function($routeProvider) {
// 	$routeProvider.
// 	when('/home', {
// 		templateUrl: 'partials/home.html',
// 		controller: 'DetailsCtrl'
// 	}).
// 	when('/details/:num', {
// 		templateUrl: 'partials/details.html',
// 		controller: 'DetailsCtrl'
// 	}).otherwise({
// 		redirectTo: '/home'
// 	})
// }]);

// julioApp.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
// 	$http.get('js/data.json').success(function(data) {
// 		$scope.people = data;
// 		$scope.itemNum = $routeParams.num;
// 	});
// }]);
