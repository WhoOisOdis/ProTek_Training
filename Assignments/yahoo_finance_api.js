var yahooApi = angular.module('myApp', []);

yahooApi.controller('myCtrl', ['$scope', '$http', function($scope, $http) {

	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	
	var yql_query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT", "NOK", "ERIC", "AMZN", "FB", "INTC", "CSCO", "TXN", "ADBE", "INTC", "WDC", "SNDK",  "ADSK", "GRPN", "SNPS" )';

	var encodedUriString = encodeURI(baseUrl+yql_query);

	var queryStringFinal = encodedUriString + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';

	$http.jsonp(queryStringFinal).success(function(data) {
		$scope.yahooQuote = data.query.results.quote;

		console.log(data);

		console.log($scope.yahooQuote);
	});
}]);





// URL: https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%20%22NOK%22%2C%20%22ERIC%22%2C%20%22AMZN%22%2C%20%22FB%22%2C%20%22INTC%22%2C%20%22CSCO%22%2C%20%22TXN%22%2C%20%22ADBE%22%2C%20%22INTC%22%2C%20%22WDC%22%2C%20%22SNDK%22%2C%20%20%22ADSK%22%2C%20%22GRPN%22%2C%20%22SNPS%22%20)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK

// select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT", "NOK", "ERIC", "AMZN", "FB", "INTC", "CSCO", "TXN", "ADBE", "INTC", "WDC", "SNDK",  "ADSK", "GRPN", "SNPS" )