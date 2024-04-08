const express = require('express');
const server = express();

const todo = require('./todos')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/todo', todo)

server.listen(3298)