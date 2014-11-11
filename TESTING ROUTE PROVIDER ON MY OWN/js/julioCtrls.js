var julioCtrls = angular.module('julioControllers', []);

julioCtrls.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data) {
		$scope.people = data;
		$scope.itemNum = $routeParams.num;
	});
}]);