/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    attributes: {
        role: {
            type: 'string',
            defaultsTo: 'Consumer' // Can be Consumer or Conductor
        },
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        contact: {
            type: 'string',
            required: true,
            unique: true
        },
        address:{
            type: 'string',
            defaultsTo: 'Pune Smart City'
        }
        //,
        //lastTrips: {
        //    type: 'array'
        //}
    }
};