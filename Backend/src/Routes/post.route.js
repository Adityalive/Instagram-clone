const express = require('express');
const postrouter = express.Router();
const postcontroller = require('../Controller/post.controller')
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })

postrouter.post('/upload',upload.single('file'), postcontroller.postcontroller)
postrouter.get('/getposts', postcontroller.getPosts)
postrouter.get('/getpostdetails/:id', postcontroller.getpostdetails)
module.exports = postrouter;