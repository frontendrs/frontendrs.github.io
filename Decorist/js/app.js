var app = angular.module('decorist', ['ui.router']);

app.value('order', {
	cart: [
	{
		itemName: 'personal shopper package',
		quantity: 1,
		price: 69,
		imgUrl: 'img/photo2.png'
	},
	{
		itemName: 'new package',
		quantity: 1,
		price: 100,
		imgUrl: 'img/photo2.png'
	}],
	tax: 0,
	shipping: 0
});

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/cart');
	$stateProvider
			.state('cart', {
				url: '/cart',
				template: '<cart></cart>'
			})
			.state('payment', {
				url: '/payment',
				template: '<payment></payment>'
			})
			.state('info', {
				url: '/info',
				template: '<info>10</info>'
			});
});
