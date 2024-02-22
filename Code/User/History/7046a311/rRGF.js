const express = require('express');

const userRoutes = express.router();

userRoutes.post('/api/v1/users/register', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User registered',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.post('/api/v1/users/login', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User logged in',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.get('/api/v1/users/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User Details',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.get('/api/v1/users/profile/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.put('/api/v1/users/profile-photo-upload/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile image upload',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.put('/api/v1/users/cover-photo-upload/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile cover upload',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.put('/api/v1/users/update-password/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User password update',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.get('/api/v1/users/logout', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User logged out',
        });
    } catch {
        res.json(error);
    }
});

module.exports = userRoutes;
