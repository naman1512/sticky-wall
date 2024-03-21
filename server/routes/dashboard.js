const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

//dash board Routes
router.get('/dashboard', dashboardController.dashboard);

module.exports = router;