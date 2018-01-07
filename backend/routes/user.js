var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var passport = require('passport');
var User = require('../models/User');
var secrets = require('../secrets');

/**
 * GET /login
 * Login page.
 */
exports.getLogin = function (req, res) {
    console.log(req.user);
    if (req.user) return res.redirect('/admin/#');
    res.render('login', {
        title: 'Logowanie'
    });
};

/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = function (req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors); //!TODO
        return res.redirect('/login');
    }

    passport.authenticate('local', function (err, user, info) {
        if (err) return next(err);
        if (!user) {
            req.flash('errors', { msg: info.message });
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            if (err) return next(err);
            res.redirect('/admin/#');
        });
    })(req, res, next);
};


exports.index = function (req, res, next) {
    return res.redirect('/');
}
/**
 * GET /logout
 * Log out.
 */
exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * GET /signup
 * Signup page.
 */
exports.getSignup = function (req, res) {
    if (req.user) return res.redirect('/admin/#');
    res.render('signup', {
        title: 'Stwórz konto'
    });
};

/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = function (req, res, next) {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({ email: req.body.email }, function (err, existingUser) {
        if (existingUser) {
            req.flash('errors', { msg: 'Account with that email address already exists.' });
            return res.redirect('/login');
        }
        if (req.body.password !== req.body.repeatPassword) {
            req.flash('errors', { msg: 'Passwords doesn\'t match.' });
            return res.redirect('/login');
        }
        user.save(function (err) {
            if (err) return next(err);
            req.logIn(user, function (err) {
                if (err) return next(err);
                res.redirect('/admin/#');
            });
        });
    });
};

/**
 * GET /account
 * Profile page.
 */
exports.getAccount = function (req, res) {
    res.render('account/profile', {
        title: 'Zarządzanie profilem'
    });
};

/**
 * POST /account/profile
 * Update profile information.
 */
exports.postUpdateProfile = function (req, res, next) {
    User.findById(req.user.id, function (err, user) {
        if (err) return next(err);
        user.email = req.body.email || '';
        user.profile.name = req.body.name || '';
        user.profile.gender = req.body.gender || '';
        user.profile.location = req.body.location || '';
        user.profile.website = req.body.website || '';

        user.save(function (err) {
            if (err) return next(err);
            req.flash('success', { msg: 'Zmiany w profilu zapisane pomyślnie.' });
            res.redirect('/account');
        });
    });
};

/**
 * POST /account/password
 * Update current password.
 */
exports.postUpdatePassword = function (req, res, next) {
    req.assert('password', 'Hasło musi mieć minimum 4 znaki.').len(4);
    req.assert('confirmPassword', 'Hasła różnią się od siebie.').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/account');
    }

    User.findById(req.user.id, function (err, user) {
        if (err) return next(err);

        user.password = req.body.password;

        user.save(function (err) {
            if (err) return next(err);
            req.flash('success', { msg: 'Hasło zostało pomyślnie zmienione.' });
            res.redirect('/account');
        });
    });
};

/**
 * POST /account/delete
 * Delete user account.
 */
exports.postDeleteAccount = function (req, res, next) {
    User.remove({ _id: req.user.id }, function (err) {
        if (err) return next(err);
        req.logout();
        req.flash('info', { msg: 'Twoje konto zostało pomyślnie usunięte.' });
        res.redirect('/');
    });
};

/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 */
exports.getOauthUnlink = function (req, res, next) {
    var provider = req.params.provider;
    User.findById(req.user.id, function (err, user) {
        if (err) return next(err);

        user[provider] = undefined;
        user.tokens = _.reject(user.tokens, function (token) { return token.kind === provider; });

        user.save(function (err) {
            if (err) return next(err);
            req.flash('info', { msg: provider + ' account has been unlinked.' });
            res.redirect('/account');
        });
    });
};

/**
 * GET /reset/:token
 * Reset Password page.
 */
exports.getReset = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    User
        .findOne({ resetPasswordToken: req.params.token })
        .where('resetPasswordExpires').gt(Date.now())
        .exec(function (err, user) {
            if (!user) {
                req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
                return res.redirect('/forgot');
            }
            res.render('account/reset', {
                title: 'Password Reset'
            });
        });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 */
exports.postReset = function (req, res, next) {
    req.assert('password', 'Password must be at least 4 characters long.').len(4);
    req.assert('confirm', 'Passwords must match.').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('back');
    }

    async.waterfall([
        function (done) {
            User
                .findOne({ resetPasswordToken: req.params.token })
                .where('resetPasswordExpires').gt(Date.now())
                .exec(function (err, user) {
                    if (!user) {
                        req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
                        return res.redirect('back');
                    }

                    user.password = req.body.password;
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpires = undefined;

                    user.save(function (err) {
                        if (err) return next(err);
                        req.logIn(user, function (err) {
                            done(err, user);
                        });
                    });
                });
        },
        function (user, done) {
        }
    ], function (err) {
        if (err) return next(err);
        res.redirect('/');
    });
};