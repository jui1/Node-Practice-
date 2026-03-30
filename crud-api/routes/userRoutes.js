const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  register,
  login,
} = require("../controllers/userController");

const protect = require("../middleware/auth");

router.post("/", createUser);
router.get("/", getUsers);

router.post("/register", register);
router.post("/login", login);

router.get("/profile", protect, (req, res) => {
  res.json({ message: "Protect route", user: req.user });
});

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;