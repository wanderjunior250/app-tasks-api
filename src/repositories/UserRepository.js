'use strict';
var mongoose = require('mongoose');
var User = require('../config/db');


module.exports = new class UserRepository {

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
      ra: user.ra,
      tasks: user.tasks
    }

    return User.findByIdAndUpdate(id, updateduser, { new: true });
  }

  delete(id) {
    return User.findByIdAndRemove(id);
  }

}