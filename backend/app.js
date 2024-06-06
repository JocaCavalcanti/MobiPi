const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const eventRoutes = require('./routes/eventRoutes');
const alertRoutes = require('./routes/alertRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use('/api/events', eventRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/profiles', profileRoutes);

module.exports = app;
