const express = require('express');
const { postCreateCtrl, postListCtrl, postDetailsCtrl, postDeleteCtrl, postUpdateCtrl } = require('../controllers/posts');

const postRoutes = express.Router();

postRoutes.post('/', postCreateCtrl);

postRoutes.get('/', postListCtrl);

postRoutes.get('/:id', postDetailsCtrl);

postRoutes.delete('/:id', postDeleteCtrl);

postRoutes.put('/:id', postUpdateCtrl);

module.exports = postRoutes;