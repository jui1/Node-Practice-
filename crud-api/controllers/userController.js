const User = require("../models/User");

const createUser = async(req, res) => {
    // res.send("Create User");
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message :error.message});
        
    }
  };
  
//   const getUsers = (req, res) => {
//     res.send("Get Users");
//   };

  const getUsers = async (req, res) => {
    try {
      console.log("API HIT");  
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  };
  
  const getUser = (req, res) => {
    res.send("Get Single User");
  };
  
  const updateUser = (req, res) => {
    res.send("Update User");
  };
  
  const deleteUser = (req, res) => {
    res.send("Delete User");
  };
  
  module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
  };