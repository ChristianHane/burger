const express = require('express');
const apiBurgerController = require('../controllers/apiBurgersController.js');
const landingController = require('../controllers/landingController.js');

const router = express.Router();

router.route('/').get(landingController.get)

router.route('/api/burgers/:id').patch(apiBurgerController.patch);

router.route('/api/burgers').post(apiBurgerController.post);

module.exports = router;
