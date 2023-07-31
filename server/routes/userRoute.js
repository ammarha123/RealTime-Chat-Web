const express = require("express")

const {registerUser, loginUser, findUser, getUser} = require("../controller/userController")

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/findUser/:userId", findUser)
router.get("/", getUser)

module.exports = router;