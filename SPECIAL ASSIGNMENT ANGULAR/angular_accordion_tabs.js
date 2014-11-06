var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('myCtrl1', function($scope) {
	 $scope.status = {
    	isFirstOpen: true,
    	isFirstDisabled: false
  	 };

  	 $scope.group = {
  	 	title: "NEW TITLE NOW",
  	 	content: "SO MUCH CONTENT"
  	 };

  	 $scope.items = []

  	 $scope.addItem = function() {
  	 	var itemNum = $scope.items.length + 1;
  	 	$scope.items.push('item' + itemNum);
  	 }


});

myApp.controller('myCtrl2', function($scope) {
	$scope.tabs = [
	    { title:'Dynamic Title 1', content:'Dynamic content 1' },
	    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
	  ];

	  $scope.alertMe = function() {
	    setTimeout(function() {
	      alert('You\'ve selected the alert tab!');
	    });
	  };
});