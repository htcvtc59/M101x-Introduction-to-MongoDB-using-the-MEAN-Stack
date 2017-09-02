function setupAuth(User, app) {
    var passport = require('passport');
    var FacebookStrategy = require('passport-facebook').Strategy;

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        User.findOne({ _id: id }).
            exec(done);
    });

    passport.use(new FacebookStrategy({
        clientID: '134677323815499',
        clientSecret: 'de589d73ae925e242fdd06c73cf350b5',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }, function (accessToken, refreshToken, profile, done) {
        if (!profile.emails || !profile.emails.length) {
            return done('No emails associated with this account!');
        }
        User.findOneAndUpdate(
            { 'data.oauth': profile.id },
            {
                $set: {
                    'profile.username': profile.emails[0].value,
                    'profile.piture': 'http://graph.facebook.com/' +
                    profile.id.toString() + '/picture?type=large'
                }
            }, {
                'new': true, upsert: true, runValidators: true
            },
            function (error, user) {
                done(error, user);
            }
        );
    }));

    app.use(require('express-session')({
        secret: 'this is a secret'
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook',
        { failureRedirect: '/fail' }), function (req, res) {
            res.send('Welcome, ' + req.user.profile.username);
        });
}
module.exports = setupAuth;