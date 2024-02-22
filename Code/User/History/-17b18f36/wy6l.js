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

module.exports = { registerCtrl, loginCtrl, };
