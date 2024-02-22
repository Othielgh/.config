const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('MONGO_URL');
        console.log('DB Connected Successfully');
    } catch (error) {
        console.log('DB Failed to connect,', error.message);
    }
};

dbConnect()
