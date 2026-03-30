const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  register,
  login,

} = require("../controllers/userController");
const validrequest = require("../middleware/validateRequest");


const protect = require("../middleware/auth");

router.post("/", createUser);
router.get("/", getUsers);


router.post("/register", register ,
    [
        body("name").notEmpty().withMessage("name is required"),
        body("email").isEmail().withMessage("valid mail meassge"),
        body("password").isLength({min :  6})
        .withMessage("Password must be ")

    ],
    validrequest,
    register,
);
router.post("/login", login, 
    [
        body("email").isEmail().withMessage("valid email requred"),
        body("password").notEmpty().withMessage("Password Requried")

    ],
    validrequest,
    login
);

router.get("/profile", protect, (req, res) => {
  res.json({ message: "Protect route", user: req.user });
});

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;