const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path: 'config/.env'});

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }))

const authRoutes = require('./routes/authRoutes');
const crudRoutes = require('./routes/crudRoutes');
app.use('/auth', authRoutes);
app.use('/crud', crudRoutes);

const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});