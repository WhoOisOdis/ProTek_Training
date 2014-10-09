var app = angular.module("myApp", []);

	app.controller("myCtrl", function($scope, $http)
	{
		$http
			({
				url: "data.json",
				method: "GET",
			})
			
			.success(function (resp)
			{
				$scope.students = resp;
			});
		
	});