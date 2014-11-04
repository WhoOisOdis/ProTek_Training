\var userApp = angular.module("myApp", []); //registering your app, [] is an empty dependencie injection

userApp.controller("myCtrl", function ($scope, $http)
{
	$scope.m = false;
	$scope.checkuname= function()
	{
		var x = $scope.uname;
		$http
		({
			method: "GET", //we are getting from the server, not posting to it, if using post make sure to include the data keyword after url
			url: "username.json"
		}).success(function(resp)
		{
			for(var i = 0; i < resp.length; i++)
			{
				if(x == resp[i].name)
				{
					$scope.m=true;
					break; //reminder: breaks are only used in loops and in switch statements
				}
						
				else
				{
					$scope.m=false;
				}
			}
		});
	};
});