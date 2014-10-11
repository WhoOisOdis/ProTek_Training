var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.otherwise("/state1");

	$stateProvider
	.state('state1',
	{
		url: "/state1",
		templateUrl: "../Partials/home.html"
	})

	.state('state2',
	{
		url: "/state2",
		templateUrl: "../Partials/account.html"
	})

	.state('state3',
	{
		url: "/state3",
		templateUrl: "../Partials/about.html"
	})
})