const express = require('express')
const router = express.Router()
const post = require('../controllers/posts.controller')

router.get('/posts', post.list)
router.post('/posts/create', post.create)
router.get('/posts/:id', post.detail)
router.patch('/posts/:id', post.update)
router.delete('/posts/:id', post.delete)

module.exports = router