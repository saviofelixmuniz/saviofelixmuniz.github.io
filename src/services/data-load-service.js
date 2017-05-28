//Service responsible for loading data from file, it returns a promise for assync porposes. 

angular.module('upplify')
.service('DataLoad', function ($http) {

	this.getAllFood = function () {
		return $http.get('/resources/json/menu.json')
				.then(function(foodData) {
					return foodData.data.food;
				});

	}
});