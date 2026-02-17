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

module.exports = {
    postcontroller
};
