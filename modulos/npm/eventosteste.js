var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var meuEvento = function () {
  console.log('Ai ai ai ai, criei meu proprio evento');
}

//Assign the event handler to an event:
eventEmitter.on('criei', meuEvento);

//Fire the 'scream' event:
eventEmitter.emit('criei');