const postCreateCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Post created',
        });
    } catch {
        res.json(error);
    }
};

const postListCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts list',
        });
    } catch {
        res.json(error);
    }
};

const postDetailsCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts details',
        });
    } catch {
        res.json(error);
    }
};

const postDeleteCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts deleted',
        });
    } catch {
        res.json(error);
    }
};

const postUpdateCtrl = async (req, res) => {
    try {
        res.json({
            status: 'success',
            user: 'Posts updated',
        });
    } catch {
        res.json(error);
    }
};

module.exports = {
    postCreateCtrl,
    postDeleteCtrl,
    postDetailsCtrl,
    postListCtrl,
    postUpdateCtrl,
};
