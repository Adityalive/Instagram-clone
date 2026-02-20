
const mongoose = require('mongoose');

const folloSchema =new mongoose.Schema({
    followrs:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    following:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true   
    }
}, {
    timestamps:true
});
        const follow = mongoose.model('Follow', folloSchema);
        module.exports = follow;
