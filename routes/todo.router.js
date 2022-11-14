const express = require('express');
const router = express.Router();


const {
    getAllTodo, 
    getTodoByID, 
    addTodo, 
    updateTodoByID, 
    deleteTodoByID, 
    deleteAll,
} = require ('../controllers/todo.controller');


router.get('/', getAllTodo);
router.get('/:id', getTodoByID);
router.post('/', addTodo);
router.put('/:id', updateTodoByID);
router.delete('/:id', deleteTodoByID);
router.delete('/', deleteAll);
