const registerCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'User registered',
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
