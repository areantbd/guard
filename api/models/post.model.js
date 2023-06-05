const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required',
    trim: true,
    maxLength: [50, 'Title must be <= 50 chars.']
  },
  content: {
    type: String,
    required: 'Content is required',
    trim: true
  },
  image: "string"
}, { timestamps: true, 
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v
      ret.id = ret._id
      delete ret._id
      
      return ret
    }
  }
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post