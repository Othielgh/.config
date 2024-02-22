const express = require('express');
const {
    commentCreateCtrl,
    commentDetailsCtrl,
    commentDeleteCtrl,
    commentUpdateCtrl,
} = require('../controllers/comments');

const commentsRoutes = express.Router();

commentsRoutes.post('/', commentCreateCtrl);

commentsRoutes.get('/:id', commentDetailsCtrl);

commentsRoutes.delete('/:id', commentDeleteCtrl);

commentsRoutes.put('/:id', commentUpdateCtrl);

module.exports = commentsRoutes;
