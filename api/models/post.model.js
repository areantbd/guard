const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required',
    trim: true,
  }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)
module.exports = Post