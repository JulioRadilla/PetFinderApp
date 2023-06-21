const express = require('express');
const router = express.Router();
const petsController = require('../controllers/pets');
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth , petsController.getPets);

router.post('/createPet', petsController.createPet);

router.put('/addUrgent', petsController.addUrgent);

router.delete('/deletePet', petsController.deletePet);

router.put('/addFoundFeature', petsController.addFoundFeature);

module.exports = router;