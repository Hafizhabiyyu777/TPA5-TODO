const db = require("../models");
const { User } = db;
const jwt = require("jsonwebtoken");
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


  addUser: async (req, res) => {
    try {
      const { username, password, email } = req.body;
      const newuserData = {
        username: username,
        password: password,
        email: email,
        createdAt :new Date(),
        updatedAt : new Date()
      };

      const userData = await User.create(newuserData);
      console.log(userData);
      res.status(201).json({
        message: "new User created",
        userData,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || "internal server error",
      });
    }
  },




  login: async (req, res) => {
    const { email, password } = req.body;

    const userData = users.find(
      (item) => email === item.email && password === item.password
    );
  
    const token = jwt.sign(
      {
        id: userData.id,
      },
      KEY
    );
  
    if (userData) {
      res.json({
        message: "success login",
        token,
      });
    } else {
      res.status(401).json({
        message: "email or password are incorrect",
      });
    }
  },



};
