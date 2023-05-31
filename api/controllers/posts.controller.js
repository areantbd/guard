const Post = require("../models/post.model");
const createError = require("http-errors");


module.exports.list = (req, res, next) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  
  Post.create({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  })
    .then((post) => res.status(201).json(post))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Post.findById(req.params.id)
  .then((post) => {
    if (post) {
      res.status(201).json(post)
    } else {
      next(createError(404, "Post not found"))
    }
  })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content,
    // image: req.body.image,
  }, { new: true, runValidators: true })
  .then((post) => {
    if (post) {
      res.status(201).json(post)
    } else {
      next(createError(404, "Post not found"))
    }
  })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
  .then((post) => {
    if (post) {
      res.status(204).send()
    } else {
      next(createError(404, "Post not found"))
    }
  })
    .catch(next);
};

module.exports.deleteAll = (req, res, next) => {
  Post.deleteMany()
  .then(() => res.status(204).json())
  .catch(next);
}
