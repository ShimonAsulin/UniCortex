const { register, login } = require("../Controllers/AuthControllers");
const { checkUser } = require("../Middlewares/AuthMiddlewares");
const Users = require("../Models/authModel");

const router = require("express").Router();

const getAllUsers = (req, res) => {
  Users.find()
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ message: "Users not found", error: err.message })
    );
};
const getspecUser = async (req, res) => {
  console.log(req.params.id);
  let _id = await req.params.id;
  try {
    res.send(await Users.find({ _id }));
  } catch(err) {
      res.status(404).json({ message: "User not found", error: err.message });
  }
};

router.get("/users", getAllUsers);
router.get("/users/:id", getspecUser);

router.post("/", checkUser);
// router.post("/dashboard", checkUser); //secrate page (dashborad)
router.post("/register/", register);
router.post("/login/", login);

module.exports = router;
