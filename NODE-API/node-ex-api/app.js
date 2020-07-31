const express = require('express');
const app = express();

const bookingRoute = require('./routes/bookingRoutes');
app.use('/reservas', bookingRoute);

module.exports = app;



