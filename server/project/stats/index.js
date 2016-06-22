const express = require('express');
const router = express.Router();
const controller = require('./stats.controller')();

router.get('/', controller.query);
router.get('/activity', controller.activity);
router.get('/count', controller.count);

module.exports = {
  name: 'Stats router',
  version: '0.1.0',
  
  router: router,
};