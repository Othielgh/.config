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

module.exports = registerCtrl;