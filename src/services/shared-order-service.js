//Service that will hold the costumer's order info. It's important so all components may have access to it.
angular.module('upplify')
.service('SharedOrder', function () {

	var order = [];

	this.pushOrder = function (newItem) {
		var isNew = order.every(function(item) {
						if (newItem.id === item.id) {
							return false;
						}
						else {
							return true;
						} 
					});

		if (isNew || order.length == 0) 
			order.push(newItem);
	}

	this.getOrder = function () {
		return order;
	}

	this.updateOrder = function(newOrder) {
		order = newOrder;
	}

	this.setNavBarCallback = function(callback) {
		this.navBarCallback = callback;
	}

	//This will make it possible for other components to run the nav bar callback and updating the number of items' badge, it's important because holds the responsibility for its expert. 
	this.runNavBarCallback = function() {
		this.navBarCallback(order);
	}
})