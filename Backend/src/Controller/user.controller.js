const User = require('../Models/user.model.js');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const crypto = require('crypto');

async function register(req, res) {
    const { email, password, username, bio, profileImage } = req.body;
    const UserExists = await User.findOne({
        $or: [
            { email },
            { username }
        ]
    });
    if (UserExists) {
        return res.status(409).send('User already exists');
    }
    const hash = crypto.createHash('sha256').update(password).digest('hex');

    const user = await User.create({
        email,
        password: hash,
        username,
        bio,
        profileImage,
    });
    const token = jwt.sign({
        id: user._id,
        username
    }, process.env.jwt);
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 });
    res.status(201).send(user);
}

async function login(req, res) {
    const { email, password, username, bio, profileImage } = req.body;
    const user = await User.findOne({
        $or: [
            { email },
            { username }
        ]
    }).select('+password');
    if (!user) {
        return res.status(401).send('User not found');
    }
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    if (user.password !== hash) {
        return res.status(401).send('Invalid password');
    }
    const token = jwt.sign({
        id: user._id,
        username
    }, process.env.jwt);
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 });

    res.status(200).send({ user, token });
}

module.exports = {
    register,
    login
};