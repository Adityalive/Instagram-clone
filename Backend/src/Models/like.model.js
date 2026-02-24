const mongoose = require('mongoose');

const likeschema =new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:[true,"post is required for creating a like for user"]
    },
    user:{
        type:String,
        required:[true,"username is required for creating a like for user"]
    },
    timestamps:true
})
likeschema.index({ post: 1, user: 1 }, { unique: true });
const likeModel = mongoose.model('Like', likeschema);
module.exports = likeModel;