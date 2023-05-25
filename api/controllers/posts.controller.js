const Post = require("../models/post.model");

module.exports.list = (req, res, next) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  const data = req.body;
  console.error("data", data);
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
    .then((post) => res.json(post))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((post) => res.json(post))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).json())
    .catch(next);
};

module.exports.deleteAll = (req, res, next) => {
  Post.deleteMany()
  .then(() => res.status(204).json())
  .catch(next);
}
