const express = require('express');

const postRoutes = express.router();


postRoutes.post('/posts', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Post created',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.get('/posts', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts list',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.get('/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts details',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.delete('/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts deleted',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.put('/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts updated',
        });
    } catch {
        res.json(error);
    }
});
