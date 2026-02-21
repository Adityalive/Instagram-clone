
const mongoose = require('mongoose');

const folloSchema =new mongoose.Schema({
    followrs:{
        type:String
    },
    following:{
        type:String   
    },
    status:{
        type:String,
        default:"pending",
        enum:["pending","accepted","rejected"]
    }
}, {
    timestamps:true
});
        const follow = mongoose.model('Follow', folloSchema);
        module.exports = follow;
