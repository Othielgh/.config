require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users');

require('./config/dbConnect');

const app = express();

//middlewares

app.use('/api/v1/users',userRoutes);

//-------------
// post route
//-------------
app.post('/api/v1/posts', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Post created',
        });
    } catch {
        res.json(error);
    }
});

app.get('/api/v1/posts', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts list',
        });
    } catch {
        res.json(error);
    }
});

app.get('/api/v1/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts details',
        });
    } catch {
        res.json(error);
    }
});

app.delete('/api/v1/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts deleted',
        });
    } catch {
        res.json(error);
    }
});

app.put('/api/v1/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts updated',
        });
    } catch {
        res.json(error);
    }
});

//-------------
// comment route
//-------------

app.post('/api/v1/comments', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Comment created',
        });
    } catch {
        res.json(error);
    }
});

app.get('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment details',
        });
    } catch {
        res.json(error);
    }
});

app.delete('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment deleted',
        });
    } catch {
        res.json(error);
    }
});

app.put('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment updated',
        });
    } catch {
        res.json(error);
    }
});

//error handler
//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
