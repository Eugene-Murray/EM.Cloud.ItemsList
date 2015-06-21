var helpers = (function() {
  
   var addItemToUI = function(id, value) {
    var textNode = document.createTextNode(value);

    var tdContentNode = document.createElement("TD");
    tdContentNode.appendChild(textNode);
    tdContentNode.id = id;
    console.log(tdContentNode);

    var button = document.createElement("Button");
    button.innerHTML = 'x';
    var tdButtonNode = document.createElement("TD").appendChild(button);


    var trNode = document.createElement("TR");
    trNode.appendChild(tdContentNode);
    trNode.appendChild(tdButtonNode);

    document.getElementById("itemsTableBody").appendChild(trNode);
    document.getElementById("itemCount").innerHTML = DataService.count();

  };
  
  var getEventTarget = function(e) {
    e = e || window.event;
    var element = e.target.parentElement || e.srcElement.parentElement;
    return element;
  };

  var generateUUID = function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };
  
  return {
    getEventTarget : getEventTarget,
    generateUUID : generateUUID,
    addItemToUI : addItemToUI 
  };
  
})();