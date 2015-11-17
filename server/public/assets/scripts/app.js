var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$http', function($scope, $http){
    //GET USERS
    $scope.user = {};
    $scope.usersArray = [];

   $scope.getUsers = function(){
      $http.get('/getUsers').then(function(response){
         $scope.usersArray = response.data;
      });
   };
   $scope.getUsers();


    //--------------------------
    $scope.address = {};
    $scope.addressArray = [];

    $scope.getAddresses = function(){
        $http.get('/getAddresses').then(function(response){
            $scope.addressArray = response.data;
        });
    };
    $scope.getAddressesByName = function(name){
        $http.get('/getAddressByName/' + name).then(function(response){
            $scope.addressArray = response.data;
        });
    }

    $scope.getAddresses();
}]);




//myApp.config(['$routeProvider', function($routeProvider){
//   $routeProvider.
//       when('/users', {
//          templateUrl: "assets/views/routes/home.html",
//          controller: "SomeController"
//       }).
//       when('/addresses', {
//          templateUrl: "assets/views/routes/code.html",
//          controller: "SomeController"
//       }).
//       otherwise({
//          redirectTo: 'home'
//       });
//}]);