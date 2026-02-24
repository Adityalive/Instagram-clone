const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "Post is required for creating a like"]
    },
    user: {
      type: String, // or mongoose.Schema.Types.ObjectId with ref:"User"
      required: [true, "Username is required for creating a like"]
    }
  },
  { timestamps: true } // ✅ schema options go here
);

// Ensure a user can like a post only once
likeSchema.index({ post: 1, user: 1 }, { unique: true });

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;