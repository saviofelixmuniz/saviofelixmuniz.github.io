//Main page's controller

angular.module('upplify')
.controller('HomeCtrl', function ($rootScope, $scope, DataLoad, SharedOrder, FOODLAYOUTSETTINGS, localStorageService) {
	$scope.cart = [];
	$rootScope.currentType = 'all';
	$scope.searchTerm = '';

	//Loads the food data from the JSON file.
	$scope.loadData = function() {
		DataLoad.getAllFood().then(function(food) {
			$scope.foods = food;
		});

		var order = localStorageService.get('order');
		if (order) {
			SharedOrder.updateOrder(order);
			SharedOrder.runNavBarCallback();	
		}		
	}

	//Pushes an item to the cart and sets a new property called quantity, which will hold how many of that item the costumer will purchase.
	$scope.addItemToCart = function (item){
		item.quantity = 1;
		SharedOrder.pushOrder(item);
		SharedOrder.runNavBarCallback();
		localStorageService.set('order', SharedOrder.getOrder());
	}

	//Filters food type based on the type chosen on nav bar. Here I could have chosen to use a service as well, 
	//but, instead, I prefered to use rootScope just to show a different approach
	$scope.filterType = function(item) {
		if ($rootScope.currentType == 'all' || $rootScope.currentType == item.cuisine) 
			return true;
		else 
			return false;
	}
});