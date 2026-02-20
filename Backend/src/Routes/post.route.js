const express = require('express');
const postrouter = express.Router();
const postcontroller = require('../Controller/post.controller')
const identify = require('../middleware/authmidlleware')
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })

postrouter.post('/upload',upload.single('file'), postcontroller.postcontroller)
postrouter.get('/getposts',identify, postcontroller.getPosts)
postrouter.get('/getpostdetails/:id',identify, postcontroller.getpostdetails)
module.exports = postrouter;