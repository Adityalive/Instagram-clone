const post = require('../Models/post.model');
const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function postcontroller(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded. Use file, image, or postImage field.');
        }

        const uploadedFile = await imagekit.files.upload({
            file: req.file.buffer.toString('base64'),
            fileName: req.file.originalname || 'upload-file'
        });

        res.send(uploadedFile);
    } catch (error) {
        console.error(error);
        res.status(500).send('File upload failed');
    }
}

module.exports = {
    postcontroller
};
