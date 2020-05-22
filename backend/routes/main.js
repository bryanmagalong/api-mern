const express = require('express');
const router = express.Router();

const mainController = require('../controllers/Main');

router.get('/', mainController.main);

module.exports = router;