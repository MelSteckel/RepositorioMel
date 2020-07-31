const express = require('express');
const router = express.Router();
const bookingController = require('../Controller/bookingController');

router.get('/', bookingController.message);
//router.get('/read', bookingController.get);
router.post('/create', bookingController.post);
//router.put('/update', bookingController.put);
//router.delete('/delete', bookingController.delete);

module.exports = router;


