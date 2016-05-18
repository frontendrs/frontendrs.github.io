app.directive('cart', function(){
	return {
		templateUrl: 'templates/cart.html',
		controller: 'CartController',
		controllerAs: 'CartCtrl'
	};
});

app.controller('CartController', function(order, $state){
	this.order = order;
	this.subtotal = getSubtotal();

	this.increment = function($index){
		order.cart[$index].quantity++;
		this.subtotal = getSubtotal();
	}

	this.decrement = function($index){
		if(order.cart[$index].quantity>0){
			order.cart[$index].quantity--;
			this.subtotal = getSubtotal();
		}
	}

	this.remove = function($index){
		order.cart.splice($index, 1);
		this.subtotal = getSubtotal();
	}

	this.goToPayment = function(){
		$state.go('payment');
	}

	function getSubtotal(){
		var subtotal = 0;
		for (var i = 0; i < order.cart.length; i++) {
			subtotal += order.cart[i].price*order.cart[i].quantity;
		}

		return subtotal;
	}

});