/**
* Ticket.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    purchaseType: {
        type: 'string',
        defaultsTo: 'Offline' // Can be Online or Offline
    },
	source: {
        type: 'string',
        required: true
    },
	destination: {
        type: 'string',
        required: true
    },
	cost: {
        type: 'integer',
        required: true
    },
	tripId: {
        type: 'string',
        required: true
    },
	timestamp: {
        type: 'datetime',
        defaultsTo: new Date()
    },
	validationStatus: {
        type: 'boolean',
        defaultsTo: false
    },
	userId: {
        type: 'string',
        defaultsTo: 'Offline'
    },
	passengerCount: {
        type: 'integer',
        defaultsTo: 1
    }
  }
};

