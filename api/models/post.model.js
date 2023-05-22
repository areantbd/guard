const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required',
    trim: true,
  },
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