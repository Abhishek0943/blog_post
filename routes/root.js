const express = require('express')
const router = express.Router()
const {getPost, createPost } = require('../control/post')
router.get('/', getPost)
router.post('/', createPost)

module.exports = router