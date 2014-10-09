var app = angular.module("myApp",[]);

// app.controller("myCtrl", function($scope)
// {
// 	$scope.type = "Warning";

// });

app.directive("warnbox",function()
{
	return 
	{
		restrict: "E",
		template: "<p>hi</p>"
	}

});
// GEORGES CODE BELOW
app.directive("login", function()
{
	return 
	{
		restrict: "E",
		template: "username<input type = 'text' /><br>password<input type = 'password' />"
	}

});