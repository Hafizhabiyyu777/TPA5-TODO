const models = require ('../models');
const { Todo } = models;

module.exports = {
    getAllTodo: async (req, res) => {
        const todos = await Todo.findAll();
        res.json({
            message : "Succes get data",
            data : todos,
            status : 200
        })
    },

    getTodoByID: async (req, res) => {
        const {id} = req.params
        const todo = await Todo.findbypk(id)
        res.json({
            message : "succes get data",
            data : user
          })
    },

    addTodo: async (req, res) => {
        try{
            const { title, desc, isCompleted } = req.body;
            const newTodoData = {
                title: title,
                desc: desc,
                isCompleted: isCompleted
            };

            const todoData = await Todo.create(newTodoData);
            console.log(todoData);
            res.status(201).json({
                message: 'new Todo created',
                todoData
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'internal server error',
            });
        }
    },

    updateTodoByID: async (req, res) => {
        try {
            const { title, desc, isCompleted } = req.body;

            const updateTodoData = {
                title: title,
                desc: desc,
                isCompleted: isCompleted,
            };

            const updateTodo = await Todo.update(updateTodoData, {
                where: {
                    id: req.params.id
                }
            }); 

            res.status(200).json({
                message: 'Update todo success',
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'Internal Server Error',
            });
        }
    },

    deleteTodoByID: async (req, res) => {
        try {
            const deleteTodo = await Todo.destroy({
                where: {
                    id: req.params.id,
                }
            })
            res.status(200).json({
                message: 'Delete todo success',
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'Internal Server Error',
            })
        }
    },

    deleteAllTodo: async (req, res) => {
        res.send();
    }
}