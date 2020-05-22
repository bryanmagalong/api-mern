const express = require('express');
const router = express.Router();

const experienceController = require('../controllers/ExperienceController');

router.get('/', experienceController.findAll);

router.post('/', experienceController.createOne);

router.patch('/:experienceId', experienceController.updateOne);

router.delete('/:experienceId', experienceController.deleteOne);

module.exports = router;