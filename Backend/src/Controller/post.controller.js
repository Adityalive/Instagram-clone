const post = require('../Models/post.model');
const ImageKit = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');
const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function postcontroller(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded. Use file, image, or postImage field.');
        }
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).send('Unauthorized');
        }
        const decode = jwt.verify(token, process.env.jwt);
        if (!decode) {
            return res.status(401).send('Unauthorized');
        }

        const uploadedFile = await imagekit.files.upload({
            file: req.file.buffer.toString('base64'),
            fileName: req.file.originalname || 'upload-file'
        });

        const postcreated = await post.create({
            caption: req.body.caption,
            user: decode.id,
            imgUrl: uploadedFile.url
        });

        return res.status(201).json({
            message: 'Post created successfully',
            post: postcreated
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('File upload failed');
    }
}

async function getPosts(req,res){
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    const decode = jwt.verify(token, process.env.jwt);
    if (!decode) {
        return res.status(401).send('Unauthorized');
    }
    const posts = await post.find({ user: decode.id });

    return res.status(200).json({
        message: 'Posts fetched successfully',
        posts
    });
}
async function getpostdetails(req,res){
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    const decode = jwt.verify(token, process.env.jwt);
    if (!decode) {
        return res.status(401).send('Unauthorized');
    }
    const postId = req.params.id;
    const userId = decode.id;
    let postDoc;
    try {
        postDoc = await post.findById(postId);
        if(!postDoc){
            return res.status(404).send('Post not found');
        }
        if(postDoc.user.toString() !== userId){
            return res.status(403).send('Unauthorized');
        }
        return res.status(200).json({
            message: 'Post fetched successfully',
            post: postDoc
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Post fetch failed');
    }
}

module.exports = {
    postcontroller,
    getPosts,
    getpostdetails,
};
