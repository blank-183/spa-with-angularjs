(function () {
    'use strict';

    var signupController = function (MenuService) {
        var vm = this;

        vm.user = {};
        vm.favoriteDish = {};

        vm.showError = false;       // When this value is true error about the favorite dish wiil be shown
        vm.showMessage = false;     // When this value is true message about successfull signup will be shown

        vm.signup = function (form) {
            vm.showError = false;
            vm.showMessage = false;
          
            // If the form is not valid, don't submit
            if (form.$invalid) {
              console.log('The form is not valid');
              return;
            }
          
            if (vm.user.favoriteDish) {
              MenuService.getFavoriteDish(vm.user.favoriteDish).then(function (response) {
                vm.user.favoriteDishDetails = response.data;
                vm.user.category = response.category;
          
                if (vm.user.favoriteDishDetails === null) {
                  vm.showError = true;
                  return Promise.reject();
                }
          
                MenuService.saveUser(vm.user); // Save the user data
                vm.showMessage = true;
              }, function (error) {
                console.log(error);
                vm.showError = true;
              });
            } else {
              MenuService.saveUser(vm.user); // Save the user data without getting favorite dish details
              vm.showMessage = true;
            }
          
            console.log(vm.user);
          };
          
           
    };


    signupController.$inject = ['MenuService'];
    angular.module('public').controller('SignupController', signupController);
})();