const express = require('express');
const router = express.Router();

const {
    getIdUser,
    addUser,
    login,
} = require ('../controllers/user.controller');

router.get('/:id', getIdUser);

// ==register
router.post('/register', addUser);

router.post('/login', login);

module.exports = router;
