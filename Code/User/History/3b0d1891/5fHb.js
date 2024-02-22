require('dotenv').config();
const express = require('express');

require('./config/dbConnect');

const app = express();

//middlewares

//-------------
// user route
//-------------
app.post('/api/v1/users/register', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User registered',
        });
    } catch {
        res.json(error);
    }
});

app.post('/api/v1/users/login', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User logged in',
        });
    } catch {
        res.json(error);
    }
});

app.get('/api/v1/users/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User Details',
        });
    } catch {
        res.json(error);
    }
});

app.get('/api/v1/users/profile/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile',
        });
    } catch {
        res.json(error);
    }
});

app.put('/api/v1/users/profile-photo-upload/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile',
        });
    } catch {
        res.json(error);
    }
});


//-------------
// post route
//-------------

//-------------
// comment route
//-------------

//error handler
//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
