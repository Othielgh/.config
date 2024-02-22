const commentCreateCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Comment created',
        });
    } catch {
        res.json(error);
    }
};

const commentDetailsCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment details',
        });
    } catch {
        res.json(error);
    }
};

const commentDeleteCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment deleted',
        });
    } catch {
        res.json(error);
    }
};

const commentUpdateCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'comment updated',
        });
    } catch {
        res.json(error);
    }
};

module.exports = {
    commentCreateCtrl,
    commentDetailsCtrl,
    commentDeleteCtrl,
    commentUpdateCtrl,
};
