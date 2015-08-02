angular.module('MyApp', ['mainController', 'authService', 'appRoutes', 'userController', 'userService', 'storyService', 'storyController', 'reverseDirective'])

.config(function($httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor')
})