const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({path: 'config/.env'});

const app = express();
app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
const crudRoutes = require('./routes/crudRoutes');
app.use('/auth', authRoutes);
app.use('/crud', crudRoutes);

const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});