//Object constant used to display icons with its own properties on the nav bar directive

angular.module('upplify')
.constant('FOODLAYOUTSETTINGS', function () {
	var settings = 
	[
		{
			id: 'all',
			image: '/resources/img/all.png',
			imgStyle: '',
			pStyle: 'margin-left: 1vh',
			name: 'All'
		},
		{
			id: 'burgers',
			image: '/resources/img/burguer.png',
			imgStyle: '',
			pStyle: '',
			name: 'Burger'
		},
		{
			id: 'salad',
			image: '/resources/img/salad.png',
			imgStyle: '',
			pStyle: 'margin-left: 1vh',
			name: 'Salad'	
		},
		{
			id: 'chinese',
			image: '/resources/img/ramen.png',
			imgStyle: '',
			pStyle: '',
			name: 'Chinese'
		},
		{
			id: 'pizza',
			image: '/resources/img/pizza.png',
			imgStyle: '',
			pStyle: '',
			name: 'Pizza'
		},
		{
			id: 'beverage',
			image: '/resources/img/drink.png',
			imgStyle: '',
			pStyle: '',
			name: 'Drinks'
		}
	]

	return settings;
})