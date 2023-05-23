(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems)
  .constant('ApiBaseUrl', 'https://coursera-jhu-default-rtdb.firebaseio.com')

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController() {
    

  }

})();