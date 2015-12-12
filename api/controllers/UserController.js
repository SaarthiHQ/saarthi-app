/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findAll: function (req, res) {
    User.find().exec(function (err, users) {
      if (err) {
        res.send(400);
      } else {
        res.send(users);
      }
    });
  },

  findByEmail: function(req, res) {
    var email = req.param('email');
    console.log("Email : " + email);
    User.findByEmail(email).exec(function (err, users) {
      if (err) {
        res.send(400);
      } else {
        res.send(users);
      }
    });
  }
};

