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

    // toBuy.addItem = function () {
    //   ShoppingListCheckOffService.addToBuyItem(toBuy.itemName, toBuy.itemQuantity);
    // }

    toBuy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.addAlreadyBoughtItem(itemIndex);
    }

    toBuy.listItems = ShoppingListCheckOffService.getToBuyItems();
    console.log(toBuy.listItems);
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.listItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
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
        name: "bananas",
        quantity: 25
      },
      {
        name: "hotdogs",
        quantity: 2
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
      toBuyListItems.splice(itemIndex, 1);
      var boughtItem = {
        name: item.name,
        quantity: item.quantity
      };
      alreadyBoughtListItems.push(boughtItem);
    }

    service.getToBuyItems = function () {
      return toBuyListItems;
    }

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtListItems;
    }

  }
})();