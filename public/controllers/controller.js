var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http', function($scope,$http) {
	console.log("Hello World");

	person1 = {
		name: 'Tim',
		emial: 'tim1@gmail.com',
		number: '(111) 111-1111'
	};

	person2 = {
		name: 'emily',
		emial: 'emily2@gmail.com',
		number: '(222) 222-2222'
	};

	person3 = {
		name: 'John',
		emial: 'John3@gmail.com',
		number: '(333) 333-3333'
	};

	var contactList = [person1, person2, person3];
	$scope.contactList = contactList;
}]);

