const express = require('express');
const router = express.Router();

const todo = require('./todo.router');
const users = require('./user.router');

// cara manggil : localhost:3000/todos
router.use('/todos', todo);
router.use('/users', users);

module.exports = router;
