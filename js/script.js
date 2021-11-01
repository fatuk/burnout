var KEYS = {
  LEFT: 'DPAD_LEFT',
  RIGHT: 'DPAD_RIGHT',
};

Controller.search();

window.addEventListener('gc.controller.found', function (event) {
  var controller = event.detail.controller;
  console.log("Controller found at index " + controller.index + ".");
  console.log("'" + controller.name + "' is ready!");
}, false);


window.addEventListener('gc.button.press', function(event) {
  switch (event.detail.name) {
    case KEYS.LEFT:
      shower.prev();
      break;

    case KEYS.RIGHT:
      shower.next();
      break;
  }

}, false);
