const express = require('express');

const commentsRoutes = express.Router();

commentsRoutes.post('/', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Comment created',
        });
    } catch {
        res.json(error);
    }
});

commentsRoutes.get('/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment details',
        });
    } catch {
        res.json(error);
    }
});

commentsRoutes.delete('/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment deleted',
        });
    } catch {
        res.json(error);
    }
});

commentsRoutes.put('/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment updated',
        });
    } catch {
        res.json(error);
    }
});

module.exports = commentsRoutes;
