const passport = require('passport');
const { check, validationResult } = require('express-validator');
const { User } = require('../models/User');
const createErrorObject = errors => {
    const errorObject = [];
    errors.forEach(error => {
        let err = {
            [error.param]: error.msg
        };
        errorObject.push(error);
    });

    return errorObject;
};

const checkRegistrationFields = async (req, res, next) => {
    check('email').isEmail();
    check('username')
        .isString()
        .isLength({ min: 5, max: 30 })
        .withMessage(res.$t('username_error_LENGTH'));
    check('password')
        .isString()
        .isLength({ min: 5, max: 30 })
        .withMessage(res.$t('password_error_LENGTH'));
    let errors = validationResult(req).array() || [];
    const user = await User.findOne({ username: req.body.username });

    if (user) {
        errors.push({ param: 'username', msg: res.$t('username_error_EXISTS') });
    }

    if (errors.length > 0) {
        res.send({
            errors: createErrorObject(errors)
        });
    } else {
        next();
    }
};

const checkLoginFields = async (req, res, next) => {
    let errors = [];
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        errors.push({ param: 'email', msg: res.$t('email_error_NOTFOUND') });
    } else {
        if (req.body.password !== null && !(await user.isValidPassword(req.body.password))) {
            errors.push({ param: 'password', msg: res.$t('password_error_INCORRECT') });
        }
    }

    if (errors.length > 0) {
        res.send({
            errors: createErrorObject(errors)
        });
    } else {
        next();
    }
};

const checkEditProfileFields = async (req, res, next) => {
    let errors = [];

    if (req.body.email) {
        if (await User.findOne({ email: req.body.email })) {
            errors.push({ param: 'email', msg: res.$t('email_error_EXISTS') });
        }
    }

    if (req.body.handle) {
        if (await User.findOne({ handle: req.body.handle })) {
            errors.push({ param: 'handle', msg: res.$t('handle_error_EXISTS') });
        }
    }
    if (errors.length > 0) {
        res.send({
            errors: createErrorObject(errors)
        });
    } else {
        next();
    }
};

const checkCreateRoomFields = async (req, res, next) => {
    if (!req.body.room_name) {
        check('room_name')
            .not()
            .isEmpty()
            .withMessage(res.$t('room_error_REQUIRED'));
    } else {
        check('room_name')
            .isString()
            .isLength({ min: 3, max: 20 })
            .withMessage(res.$t('room_error_LENGTH'));
    }

    if (req.body.password) {
        check('password')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 15 })
            .withMessage(res.$t('password_error_LENGTH'));
    }

    const errors = validationResult(req).array() || [];

    if (errors.length > 0) {
        res.send({
            errors: createErrorObject(errors)
        });
    } else {
        next();
    }
};

const customSocialAuthenticate = socialAuth => {
    return (req, res, next) => {
        passport.authenticate(socialAuth, {
            state: JSON.stringify({ _socket: req.query.socketId })
        })(req, res, next);
    };
};

module.exports = {
    checkLoginFields,
    checkRegistrationFields,
    checkEditProfileFields,
    checkCreateRoomFields,
    customSocialAuthenticate,
    createErrorObject
};
