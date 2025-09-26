// src/routes/restaurants.routes.js
const express = require('express');
const restaurantsController = require('../controllers/restaurants.controller');
console.log('DEBUG restaurantsController:', restaurantsController);

const router = express.Router();

router.get('/', restaurantsController.getRestaurants);
router.get('/sync-demo', restaurantsController.getRestaurantsSync);
router.get('/popular', restaurantsController.getPopularRestaurants);
router.get('/:id', restaurantsController.getRestaurant);
router.post('/', restaurantsController.createRestaurant);
router.post('/reset-demo', restaurantsController.resetDemoData);

module.exports = router;