const express = require('express');
const {registerCtrl,loginCtrl} = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.post('/register', registerCtrl);

userRoutes.post('/login', loginCtrl);

userRoutes.get('/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User Details',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.get('/profile/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.put('/profile-photo-upload/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile image upload',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.put('/cover-photo-upload/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile cover upload',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.put('/update-password/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User password update',
        });
    } catch {
        res.json(error);
    }
});

userRoutes.get('/logout', async (req, res) => {
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
