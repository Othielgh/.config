const express = require('express');

const app = express();

//middlewares
//routes
//error handler
//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`))
