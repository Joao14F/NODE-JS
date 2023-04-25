var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
  console.log('Chamou?');
}

var Meucontrolador = function () {
    console.log('I hear a scream!');
    console.log('Chamou?');
  }
  

//Assign the event handler to an event:
eventEmitter.on('chamado', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('chamado');

//Assign the event handler to an event:
eventEmitter.on('chamado', Meucontrolador);

//Fire the 'scream' event:
eventEmitter.emit('chamado');