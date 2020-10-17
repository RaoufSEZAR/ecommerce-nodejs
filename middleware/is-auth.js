module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn && !req.session.user.email) {
        return res.redirect('/login');
    }
    next();
}