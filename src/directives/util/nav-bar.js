//Directive responsible for managing the nav bar.

angular.module('upplify')
.directive('navBar', function(FOODLAYOUTSETTINGS) {
	return {
		restrict: 'AE',
		templateUrl: '/templates/directives/util/nav-bar.html',
		controller: function ($scope, SharedOrder, $rootScope, $uibModal) {
			
			//Callback which updates the number of different items in the cart, based on the items chose whether on home or checkout modal.
			var setOrderBadge = function (order) {
				$scope.orderBadge = order.length;
			}

			SharedOrder.setNavBarCallback(setOrderBadge);

			//Saturates or removes saturation of icons based on the current picked one.
			$scope.isActive = function (tag) {
				if (tag == $rootScope.currentType) return 'active';
				else return 'not-active';
			}

			//Filters the chosen food type.
			$scope.setCurrent = function(current) {
				$rootScope.currentType = current;
			}


			$scope.iconLayouts = FOODLAYOUTSETTINGS();

			//Opens modal in order to checkout the order. 
			$scope.checkout = function() {
				$scope.order = SharedOrder.getOrder();

		        var modalInstance = $uibModal.open({
			          animation: true,
			          ariaLabelledBy: 'modal-title',
			          ariaDescribedBy: 'modal-body',
			          templateUrl: '/templates/components/checkout-modal.html',
			          controller: 'CheckoutModal',
			          scope: this,
			          controllerAs: '$ctrl'
	        	});

		        modalInstance.result.then(function () {
		        	$scope.orderBadge = 0;
		        });
			}
		}
	}
})