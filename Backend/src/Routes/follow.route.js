const express = require('express');

const followrouter = express.Router();
const followcontroller = require('../Controller/follow.controller')
const identify = require('../middleware/authmidlleware')

followrouter.post('/follow/:username',identify, followcontroller.followadded)
followrouter.post('/unfollow/:username',identify, followcontroller.unfollow)

module.exports = followrouter;