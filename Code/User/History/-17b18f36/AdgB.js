const User = require('../model/user/user');

const registerCtrl = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        //1. check if user exists
        const userFound = await User.findOne({ email });
        // throw error if true
        if (userFound) {
            return res.json({ status: 'failed', data: 'User already Exists' });
        }
        // hash password

        //register user
        const user = await User.create({ fullname, email, password });

        res.json({
            status: 'success',
            data: user,
        });
    } catch {
        res.json(error);
    }
};

const loginCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User logged in',
        });
    } catch {
        res.json(error);
    }
};

const userDetailsCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User Details',
        });
    } catch {
        res.json(error);
    }
};

const profileCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile',
        });
    } catch {
        res.json(error);
    }
};

const photoCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile image upload',
        });
    } catch {
        res.json(error);
    }
};

const coverCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User profile cover upload',
        });
    } catch {
        res.json(error);
    }
};

const passwordCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User password update',
        });
    } catch {
        res.json(error);
    }
};

const logoutCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User logged out',
        });
    } catch {
        res.json(error);
    }
};

module.exports = {
    registerCtrl,
    loginCtrl,
    userDetailsCtrl,
    profileCtrl,
    photoCtrl,
    coverCtrl,
    passwordCtrl,
    logoutCtrl,
};
