const Post = require('../models/post.model')


module.exports.list = (req, res, next) => {
  Post.find()
    .then(streams => res.json(streams))
    .catch(error => next(error))
  res.json([])
}