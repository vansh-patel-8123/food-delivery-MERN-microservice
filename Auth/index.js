const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000 || process.env.Auth_PORT
const AuthRoutes = require('./Routes/AuthRoutes');
const DBConnection = require('./Config/Database');

// Library -> Middleware
app.use(cors())
app.use(bodyParser.json());
require('dotenv').config();

// database
DBConnection(PORT,'Auth');

// Routes
app.use('/auth', AuthRoutes);
app.get('/', (req,res) => {
    console.log('!!');
    res.send('<h1>Helo</h1>')
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});