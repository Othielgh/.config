require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/post');
const commentsRoutes = require('./routes/comments');

require('./config/dbConnect');

const app = express();

//middlewares

app.use('/api/v1/users',userRoutes);

//-------------
// post route
//-------------
app.use('/api/v1/posts', postRoutes);

//-------------
// comment route
//-------------

app.user('/api/v1/comments', commentsRoutes)

//error handler
//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
