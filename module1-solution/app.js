(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.food = "";
    $scope.message = "";
    $scope.fontColor = "";
    $scope.borderColor = "";

    $scope.checkFoodCount = function () {

      if ($scope.food.length === 0) {
        $scope.fontColor = "red";
        $scope.borderColor = "red";
        $scope.message = "Please enter data first!";
        return;
      }

      var foodItems = $scope.food.split(",");
      var foodCount = 0;

      for (var i = 0; i < foodItems.length; i++) {
        if (foodItems[i].trim() !== "") {
          foodCount++;
        }
      }
      console.log(foodCount);

      $scope.fontColor = "green";
      $scope.borderColor = "green";

      if (foodCount <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }

    };
  }
})();