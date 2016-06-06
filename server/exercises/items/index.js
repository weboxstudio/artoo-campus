const express = require('express');
const controller = require('./items.controller.js')();
const router = express.Router();

router.get('/', controller.get);

module.exports = {
  name: 'Items',
  router: router,
  version: '1.0.0',
};