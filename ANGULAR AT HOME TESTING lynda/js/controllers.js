var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
}]);












// function MyController($scope) {
// 		$scope.author = {
// 			'name' : 'Julio Fuentes',
// 			'title': 'Staff Author',
// 			'company': 'Lynda.com'
// 		}
// 	}	