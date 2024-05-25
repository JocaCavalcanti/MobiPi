const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const eventRoutes = require('./routes/eventRoutes');
const alertRoutes = require('./routes/alertRoutes');
const perfilRoutes = require('./routes/perfilRoutes');

app.use('/api/events', eventRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/perfis', perfilRoutes);

module.exports = app;
z