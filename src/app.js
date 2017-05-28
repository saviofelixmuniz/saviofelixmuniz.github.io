angular.module('upplify', ['ui.bootstrap','ngRoute', 'LocalStorageModule'])
.config(function(localStorageServiceProvider) {
	localStorageServiceProvider.setPrefix('upplify');
});