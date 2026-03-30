
const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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




const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json({ message: "User registered successfully", user });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    login,
    register, 
  };