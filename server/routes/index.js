const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// App Routes

router.get('/', mainController.homepage); // main route for homepage
router.get('/about', mainController.about); //main route 
router.get('/features', mainController.features); // main route for features
router.get('/faq', mainController.faq); // main routes for faq

module.exports = router;