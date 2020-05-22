const express = require('express');
const router = express.Router();

const experienceController = require('../controllers/ExperienceController');

router.get('/', experienceController.findAll);
router.post('/', experienceController.createOne);

module.exports = router;