'use strict';

angular.module('hayesApp')
  .controller('HomeCtrl', function () {
    
  })
  .controller('CarouselCtrl', function($scope) {
  	$scope.myInterval = 5000;
  	$scope.slides = [
  		{ image: '/assets/images/physiciansRegional.jpg' }
  	];
  });
