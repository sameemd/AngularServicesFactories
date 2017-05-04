// Code goes here
var a = 0;
angular.module('myapp', [])
  .controller('myctrl', ['$scope', 'myService', 'myFactory', function($scope, myService, myFactory) {
    $scope.firstName = "Enter ...";
    $scope.data = "will be added soon!!"
    $scope.users = {};
    $scope.clickService = function() {
      $scope.serviceValue = myService.getValue();
    };
    $scope.clickFactory = function() {
      $scope.factoryValue = myFactory.getValue();
    };
  }])
   .controller('newctrl', ['$scope', 'myService', 'myFactory', function($scope, myService, myFactory) {
      $scope.clickService = function() {
      $scope.serviceValue = myService.getValue();
    };
    $scope.clickFactory = function() {
      $scope.factoryValue = myFactory.getValue();
    };
   }])
  .service('myService', ['$http', function($http) {
    var x = 0;
    this.getValue = function() {
      return ++x;
    };
    this.getUsers = function() {
      return $http.get('https://api.github.com/users');
    };
  }])
  .service('myFactory', ['$http', function($http) {
    a += 1;
    return {
      y:++a,
      getValue : function() {
        return this.y;
      },
      getUsers: function() {
        return $http.get('https://api.github.com/users');
      }
    };

  }]);