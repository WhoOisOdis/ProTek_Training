var julioApp = angular.module('myApp', []);



julioApp.controller('myCtrl', function($scope) {

	$scope.taskItems = [];

	$scope.addTask = function(task) {
		$scope.taskItems.push(task);
		$scope.taskInput = null;
		document.getElementById("taskField").focus();
		console.log($scope.taskItems);
	}

	$scope.crossOut = function() {
		
	}
});