const routes = require('express').Router();
const passport = require('passport');

routes.get('/google', passport.authenticate('google', { scope: ['profile']}));

routes.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/')
})

module.exports = routes;