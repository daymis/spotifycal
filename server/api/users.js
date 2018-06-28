const router = require('express').Router();
const { User, Event } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
    attributes: ['email', 'events']
  })
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});