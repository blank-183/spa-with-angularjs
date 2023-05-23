(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBaseUrl', 'https://coursera-jhu-default-rtdb.firebaseio.com')
    .directive('foundItems', FoundItems)

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController() {
    var menu = this;

  }

  MenuSearchService.$inject = ['$http', 'ApiBaseUrl'];
  function MenuSearchService($http, ApiBaseUrl) {
    var service = this;
  }

  function FoundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html'
    }

    return ddo;
  }

})();