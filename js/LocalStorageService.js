var LocalStorageService = (function() {

  var STORE_NAME = "items-list-plain-js";

  var browserSupports = function() {
    if (typeof(Storage) !== "undefined") {
      return true;
    } else {
      return false;
    }
  };

  var updateItems = function(items) {
    if (browserSupports()) {
      var json = JSON.stringify({
        items: items
      });
      localStorage.setItem(STORE_NAME, json);
    }
  };

  var getItems = function() {
    var itemsJson;
    
    if (browserSupports()) {
      itemsJson = localStorage.getItem(STORE_NAME);
    } 

    if(itemsJson)
    {
      var array = JSON.parse(itemsJson);
      return array.items;
    }
    
    return null;
  };

  
  return {
    updateItems: updateItems,
    getItems: getItems
  };
  

  
}());