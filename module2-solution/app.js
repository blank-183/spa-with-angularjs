(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.itemName = "";
    toBuy.itemQuantity = "";

    toBuy.addItem = function () {
      ShoppingListCheckOffService.addToBuyItem(toBuy.itemName, toBuy.itemQuantity);
    }

    toBuy.listItems = ShoppingListCheckOffService.toBuyListItems;
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.addItem = function (itemIndex) {
      ShoppingListCheckOffService.alreadyBoughtListItems(itemIndex);
    }

    alreadyBought.listItems = ShoppingListCheckOffService.alreadyBoughtListItems;
  }

  function ShoppingListCheckOffService () {
    var service = this;

    var toBuyListItems = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "chips",
        quantity: 5
      },
      {
        name: "milk",
        quantity: 2
      },
      {
        name: "banana",
        quantity: 25
      },
      {
        name: "hotdog",
        quantity: 69
      }
    ];
    var alreadyBoughtListItems = [];

    service.addToBuyItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity 
      };

      toBuyListItems.push(item);
    };

    service.addAlreadyBoughtItem = function (itemIndex) {
      var item = toBuyListItems[itemIndex];
      alreadyBoughtListItems.push(item);
      toBuyListItems.splice(itemIndex, 1);
    }

    service.getToBuyItems = function () {
      return toBuyListItems;
    }

    service.getAlreadyBoughtItems = functino () {
      return alreadyBoughtListItems;
    }

  }
})();