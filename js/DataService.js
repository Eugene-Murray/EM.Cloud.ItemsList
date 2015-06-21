var DataService = (function() {
  
  var items = [];
  
  var addItem = function(id, value) {
    items.push({
      id: id,
      value: value
    });
    
    LocalStorageService.updateItems(items);
  };
  
  var getItem = function() {
    
  };
  
  var getItems = function() {
    
    console.log("kkkkkkkk");
    var localStorageItems = LocalStorageService.getItems();
    console.log(localStorageItems);
    console.log("kkkfffffffkkkkk");
    
    
    
    if(localStorageItems)
    {
        _.forEach(localStorageItems, function(item, key) {
            addItem(item.id, item.value);
        });
    }
    
    return items;
  };
  
  var removeItem = function(id) {
      _.remove(items, function(item) {
        return item.id == id;
      });
      
      LocalStorageService.updateItems(items);
  };
  
  var removeAll = function(id) {
      items = [];
      
      LocalStorageService.updateItems(items);
  };
  
  var count = function(){
    return items.length;
  };
  
  return {
    count: count,
    addItem: addItem,
    getItem: getItem,
    removeItem: removeItem,
    removeAll: removeAll,
    getItems: getItems
  };
  
}(LocalStorageService));