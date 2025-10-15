const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// GET /api/weather/current?city=Paris
router.get('/current', weatherController.getCurrentWeather);

// GET /api/weather/location?lat=48.8566&lon=2.3522
router.get('/location', weatherController.getWeatherByLocation);

// POST /api/weather/compare
router.post('/compare', weatherController.compareWeather);

module.exports = router;
