const mongoose =require('mongoose');

const postSchema =new mongoose.Schema({
    caption: {
        type: String,
        default: "",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    imgUrl: {
        type: String,
        required: [ true, "imgUrl is required for creating an post" ],
    }
})

const post = mongoose.model('Post', postSchema);
module.exports = post;