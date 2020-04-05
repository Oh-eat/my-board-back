const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  author: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
