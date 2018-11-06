'use strict';
var mongoose = require('mongoose')
var User = require('../config/db');


module.exports = new class userRepository {

  getAll() {
    return User.find();
  }

  getById(id) {
    return User.findById(id);
  }

  create(user) {
    return User.create(user);
  }

  update(id, user) {

    const updateduser = {
      name: user.name
    }

    return User.findByIdAndUpdate(id, updateduser, { new: true });
  }

  delete(id) {
    return User.findByIdAndRemove(id);
  }

}