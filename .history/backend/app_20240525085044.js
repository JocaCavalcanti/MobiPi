const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const eventRoutes = require('./routes/eventRoutes');
const alertRoutes = require('./routes/alertRoutes');

app.use('/api/events', eventRoutes);
app.use('/api/alerts', alertRoutes);

module.exports = app;
