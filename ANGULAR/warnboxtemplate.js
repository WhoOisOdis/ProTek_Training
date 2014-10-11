var app = angular.module("myApp",[]);

app.controller("myCtrl", function($scope)
{
	$scope.type = "Warning";
	$scope.x = "Warning!!!!";

});

app.controller("myCtrl2", function($scope)
{
	$scope.x = "Success!";
	$scope.y = "harroooo";
});

app.directive("warnbox",function()
{
	return {
		restrict: "E",
		scope: { 
		  	z: "=info"
		  },
		transclude: true,	
		template: "<div ng-transclude><img src='../IMAGES/hamster.gif' alt=''>" +
						"<p>WARNING WARNING WARNING</p>" +
						"<p>{{z}}</p></div>"
	}
});

app.config(["$routeprovider", function ($routeProvider)
		$routeProvider.when("/accounts", 
		{
			templateUrl: "partials/account.html",
			controller: "acctCtrl"
		})
	]);