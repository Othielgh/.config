const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('mongoURL');
        console.log('DB Connected Successfully');
    } catch (error) {
        console.log('DB Failed to connect,', error.message);
    }
};

dbConnect()
