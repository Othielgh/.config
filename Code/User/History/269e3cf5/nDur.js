const express = require('express');

const postRoutes = express.router();


postRoutes.post('/', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Post created',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.get('/', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts list',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.get('/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts details',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.delete('/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts deleted',
        });
    } catch {
        res.json(error);
    }
});

postRoutes.put('/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts updated',
        });
    } catch {
        res.json(error);
    }
});

module.exports = postRoutes;