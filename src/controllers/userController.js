const db = require('../models');
const {
    encryptPassword
} = require('../utils/encrypt');
const jwt = require('jsonwebtoken');
const {
    config
} = require('../config');

async function signUp(req, res, next) {
    const {
        userName,
        email,
        password,
        isAdmin
    } = req.body;

    try {
        const encryptedPassword = await encryptPassword(password);

        const newUser = await db.User.create({
            userName: userName,
            email: email,
            password: encryptedPassword,
            isAdmin: isAdmin
        });

        const token = jwt.sign({
            id: newUser._id
        }, config.encrypt.token, {
            expiresIn: 86400
        });

        res.status(200).send({
            data: newUser,
            token: token
        });
    } catch (err) {
        next(err);
    }
}

async function getUsers(req, res, next) {
    try {
        const users = await db.User.find();

        res.status(200).send({
            data: users,
        });
    } catch (err) {
        next(err);
    }
}

async function updateUser(req, res, next) {
    const {
        id: userId
    } = req.params;

    try {
        const updatedUser = await db.User.findByIdAndUpdate(userId, req.body, {
            new: true
        });

        res.status(203).send({
            data: updatedUser
        });
    } catch (err) {
        next(err);
    }
}

async function deleteUser(req, res, next) {
    const {
        id: userId
    } = req.params;

    try {
        const result = await db.User.deleteOne({
            _id: userId
        });

        if (result.ok === 1 && result.deletedCount === 1) {
            res.status(204).send({
                data: "User removed successfully"
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    signUp: signUp,
    getUsers: getUsers,
    updateUser: updateUser,
    deleteUser: deleteUser
}