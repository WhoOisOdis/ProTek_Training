var app = angular.module("myApp",[]);

app.directive("warningbox",function(){
	return{
		restrict: "EA",
		template: "<p>WARNING</p>"
	}
});
app.directive("login", function(){
	return {
		restrict: "E",
		template: "username<input type = 'text' /><br>password<input type = 'password' />"
		}
	});