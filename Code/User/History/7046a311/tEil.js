const express = require('express');
const {registerCtrl,loginCtrl} = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.post('/register', registerCtrl);

userRoutes.post('/login', loginCtrl);

userRoutes.get('/:id', detailsCtrl);

userRoutes.get('/profile/:id', profileCtrl);

userRoutes.put('/profile-photo-upload/:id', photoCtrl);

userRoutes.put('/cover-photo-upload/:id', coverCtrl);

userRoutes.put('/update-password/:id', passwordCtrl);

userRoutes.get('/logout', logoutCtrl);

module.exports = userRoutes;
