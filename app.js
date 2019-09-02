var events = require('events');
var util = require('util');


//This will create an instance of event emitter
var eventEmitter = new events.EventEmitter();


	//listener
	eventEmitter.on('clicked', function(button) {
		//'clicked' is an event
		console.log(button +'is clicked');
		
	})

	eventEmitter.emit('clicked','button');



	






