angular.module('WeatherController', ['ngRoute'])
  .controller('weatherController', ['$scope', '$http', function($scope, $http) {
    $scope.cities = ['London', 'San Francisco', 'New York', 'San Jose', 'Los Angeles'];

    $scope.location = $scope.cities[0];
    $scope.locationIn = '';
    $scope.getWeather = function() {
      $http({url: '/api/weather', method: "GET", params: {city: $scope.location}})
        .success(function(data, status, headers, config) {
          $scope.weather = data;
        })
        .error(function(data, status, headers, config) {
          $scope.weather = data;
        });
    };
    $scope.addCity = function() {
      if ($scope.cities.indexOf($scope.locationIn) != 0) {
        $scope.cities.push($scope.locationIn);
      }
      $scope.location = $scope.locationIn;
      $scope.getWeather();
    };
    $scope.setLocation = function(city) {
      
    }
  }]);
