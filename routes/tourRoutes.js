const express = require('express')

const router = express.Router();
const tourControllers = require('../controllers/tourControllers.js')

router
    .route('/')
    .get(tourControllers.getAllTours)
    .post(tourControllers.creatrTour);

router
    .route('/:id')
    .get(tourControllers.getTour)
    .patch(tourControllers.updateTour)
    .delete(tourControllers.delTour);



module.exports = router