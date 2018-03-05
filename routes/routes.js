const express = require('express');
const apiBurgerController = require('../controllers/api_burgers_controller.js');
const landingController = require('../controllers/landing_controller.js');

const router = express.Router();

router.route('/').get(landingController.get)

router.route('/api/burgers/:id').patch(apiBurgerController.patch);

router.route('/api/burgers').post(apiBurgerController.post);

module.exports = router;
