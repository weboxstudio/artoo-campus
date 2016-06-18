const express = require('express');
const router = express.Router();
const controller = require('./postits.controller')();

router.get('/', controller.query);
router.get('/reset', controller.reset);
router.post('/', controller.create);
router.put('/:id', controller.setStatus);
router.delete('/:id', controller.remove);

module.exports = {
  name: 'Postits Router',
  version: '0.1.0',
  router: router,
};