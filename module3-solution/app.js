(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('ApiBaseUrl', 'https://coursera-jhu-default-rtdb.firebaseio.com')

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
      templateUr: 'foundItems.html'
    }

    return ddo;
  }

})();