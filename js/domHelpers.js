var domHelpers = (function() {

  function onChange_newItem() {
    console.log("onChange_newItem");

    if (document.getElementById("newItemTxt").value !== "") {
      document.getElementById("addBtn").attributes.removeNamedItem("disabled");
    } else {
      var typ = document.createAttribute("disabled");
      document.getElementById("addBtn").attributes.setNamedItem(typ);
    }
  };

  function displayData() {
    console.log("displayData");

    var items = DataService.getItems();
    if (items) {
      _.forEach(items, function(item, key) {
        helpers.addItemToUI(item.id, item.value);
      });
      document.getElementById("itemCount").innerHTML = DataService.count();
    } else {
      document.getElementById("itemCount").innerHTML = "No items found in localstorage";
    }
    
   

  };

  function onClick_clearAll() {
    console.log("onClick_clearAll");

    DataService.removeAll();
    
    var children = document.getElementById("itemsTableBody").children;
    
    if(children)
    {
     var length = children.length;
     
     for (i = 0; i < length; i++) {
          document.getElementById("itemsTableBody").removeChild(children[i]);
      }
      
    }
    
    document.getElementById("itemCount").innerHTML = DataService.count();

  };

  function onClick_removeItem(e) {
    console.log("onClick_removeItem");

    if (e.srcElement.type === "submit") {
      var element = helpers.getEventTarget(e);
      var id = element.firstChild.id;

      DataService.removeItem(id);

      document.getElementById("itemsTableBody").removeChild(element);
      document.getElementById("itemCount").innerHTML = DataService.count();
      
      toastr["warning"]("Item Removed");
    }
  };

  function onClick_addItem() {
    console.log("onClick_addItem");

    var newValue = document.getElementById("newItemTxt").value;
    var id = helpers.generateUUID();
    DataService.addItem(id, newValue);
    helpers.addItemToUI(id, newValue);
    toastr["success"]("Add Success");
  };


  return {
    displayData: displayData,
    onChange_newItem: onChange_newItem,
    onClick_clearAll : onClick_clearAll,
    onClick_removeItem: onClick_removeItem,
    onClick_addItem: onClick_addItem
  };

}(helpers, DataService));