var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {


// CALLBACK IS A FUNCTION PASSED IN TO ANOTHER FUNCTION aka passing ina  function as a parameter
	$scope.searchMovie = function(mQuery){

		var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=";
		var apiKey = "ysb7mmguhpfzkcawf6kcv2zp";
		
		var rtApiUrl = baseUrl + apiKey + '&q=' + encodeURI(mQuery) + '&callback=JSON_CALLBACK';

		$http.jsonp(rtApiUrl).success(function(data) {
			$scope.movieInfo = data;
			console.log(data);
		});	
	
	};
	
	$scope.searchReviews = function() {
		var reviewsLink = $scope.movieInfo.movies[0].links.reviews;
		console.log(reviewsLink);

		var reviewUrl = reviewsLink + '?apikey=ysb7mmguhpfzkcawf6kcv2zp&callback=JSON_CALLBACK';

		$http.jsonp(reviewUrl).success(function(data2) {
			$scope.reviews = data2.reviews;
			console.log(reviews);	
		});
	};	

}]);