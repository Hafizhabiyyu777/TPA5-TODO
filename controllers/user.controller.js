const db = require("../models");
const { User } = db;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const KEY = "asdfjsdaklf234234";

module.exports = {

  getIdUser: async (req, res) =>  {
    const user = await User.findAll();
        res.json({
            message : "Succes get data",
            data : user,
            status : 200
        })
  },

  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const saltRounds = await bcrypt.genSalt(10);
      const hasPassword = await bcrypt.hash(password, saltRounds);
      
      const newDataRegister = {
        username,
        email,
        password: hasPassword
      }

      const users = await Users.create(newDataRegister);
      console.log(users)
      res.status(201).json({
        message: 'Register success',
        data: users
      }) 
    } catch (err) {
      res.status(500).json({
        message: err.message || 'Internal Server Error'
      })
    }
  },

  login: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const users = await User.findOne(email, username);
      if (!users) {
        return res.status(404).json({
          message: 'user not found'
        })
      }

      // comparing password
      const hasPassword = await bcrypt.compare(password)

      // mengecek password
      if (!hasPassword) {
        return res.status(401).json({
          message: 'Password is incorrect',
        })
      }

      // signing token with user email
      const token = jwt.sign(email, KEY, {
        expiresIn: '60s'
      })

      res.status(200).json({
        message: 'Login Successfully',
        accessToken: token,
      });
    } catch (err) {
        res.status(500).json({
        message: err.message || 'Internal Server Error'
      })
    }
  }
};
