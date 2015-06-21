var app = (function() {

  var init = function(){
    console.log("App Init");
    registerEventListeners();
    
    domHelpers.displayData();
    
    toastr["success"]("App Started");
  };
  
  var destroy = function(){
    console.log("App Destroy");
    unregisterEventListeners();
  };
  
  var registerEventListeners = function(){
    console.log("registerEventListeners");
    //document.getElementById("newItemTxt").addEventListener("change", domHelpers.onChange_newItem);
    //document.getElementById("clearAllBtn").addEventListener("click", domHelpers.onClick_clearAll);
    document.getElementById("itemsTable").addEventListener("click", domHelpers.onClick_removeItem);
    document.getElementById("addBtn").addEventListener("click", domHelpers.onClick_addItem);
  };
  
  var unregisterEventListeners = function(){
    //document.getElementById("clearAllBtn").removeEventListener("click", domHelpers.onClick_clearAll);
    document.getElementById("itemsTable").removeEventListener("click", domHelpers.onClick_removeItem);
    document.getElementById("addBtn").removeEventListener("click", domHelpers.onClick_addItem);
  };
  
  
  
  return {
    init: init,
    destroy: destroy
  };
  


}(DataService, domHelpers));