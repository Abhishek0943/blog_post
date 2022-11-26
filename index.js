
const express = require('express')
const data = require('./routes/root')
const index = express()
index.use(express.json());
index.use('/post', data)
module.exports = index;
