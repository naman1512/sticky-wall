const express = require('express');
const router = express.Router();
const {isLoggedIn} = require ('../middleware/checkAuth')
const dashboardController = require('../controllers/dashboardController');


//dash board Routes
router.get('/dashboard', isLoggedIn, dashboardController.dashboard); //Dashboard redirection
router.get('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardViewNote); //Route to view all notes in database
router.put('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardUpdateNote); // Route to update note
router.delete('/dashboard/item-delete/:id', isLoggedIn, dashboardController.dashboardDeleteNote); // Route to delete note
router.get('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNote); // Route to add new note
router.post('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNoteSubmit); // Route to Submit New Note
router.get('/dashboard/search', isLoggedIn, dashboardController.dashboardSearch); // Route to Search a note (get)
router.post('/dashboard/search', isLoggedIn, dashboardController.dashboardSearchSubmit); // Route to Search a note (post query)
module.exports = router;