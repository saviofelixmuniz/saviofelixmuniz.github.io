//Checkout modal's controller

angular.module('upplify')
.controller('CheckoutModal', function($scope, $uibModalInstance, SharedOrder, MESSAGEBOX) {
	//Closes the modal.
	$scope.cancel = function() {
		$uibModalInstance.dismiss();
	}

	//Displays a different modal showing the items purchased, thus confirming the order. 
	$scope.submit = function() {
		$uibModalInstance.close();
		MESSAGEBOX.successBox('Order confirmed', 'Your order was: <br>' + getOrderString(), confirm);
	}

	function confirm () {
		$scope.order = [];
		SharedOrder.updateOrder($scope.order);
	}

	//Computes the total value to be paid based on both quantity and different items.
	$scope.getTotal = function () {
		var total = 0;
		$scope.order.forEach(function(item) {
			total = total + (item.price * item.quantity);
		});
		return total;
	}

	//Removes one item from the cart and updates the navbar badge. 
	$scope.remove = function(itemToRemove) {
		$scope.order.every(function(item, index) {
			if (item === itemToRemove) {
				$scope.order.splice(index, 1);
				return false;
			}
			else return true;
		});

		SharedOrder.updateOrder($scope.order);
		SharedOrder.runNavBarCallback();
	}

	//Controls whether or not the confirmation button will be available (criteria: you must have at least one item in cart).
	$scope.canConfirm = function () {
		if ($scope.order.length >= 1) 
			return 'active';
		else 
			return 'disabled';
	}

	function getOrderString() {
		var string = '';
		$scope.order.forEach(function(item, index) {
			string += item.quantity + ' ' + item.title + '<br>';
		})
		return string;
	}
});