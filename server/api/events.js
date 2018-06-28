const router = require('express').Router();
const { User, Event } = require('../db/models');

module.exports = router;

router.get('/:date', (req, res, next) => {
  return Event.findAll({ where: { date: req.params.date } })
    .then(allEvents => res.json(allEvents))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Event.update(req.body, { where: { id: req.params.id }, returning: true })
    .then(([row, [event]]) => res.json(event))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});