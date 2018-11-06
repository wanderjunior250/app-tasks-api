'use strict';

const UserRepository = require('../repositories/UserRepository');

exports.get = (req, res, next) => {
  UserRepository.getAll()
    .then((user) => {
        res.status(200).send(user);
    }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res, next) => {

  UserRepository.getById(req.params.id)
    .then((user) => {
        res.status(200).send(user);
    }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
  const p = req.body;

  UserRepository.create(p)
    .then((user) => {
        res.status(200).send(user);
    }).catch(err => res.status(500).send(err))
};

exports.put = (req, res, next) => {
  const p = req.body;

  UserRepository.update(req.params.id, p)
    .then((user) => {
        res.status(201).send(user);
    }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) => {
  UserRepository.delete(req.params.id)
    .then((user) => {
        res.status(200).send('delete succeeded!');
    }).catch(err => console.error.bind(console, `Error ${err}`))
};