// ? external imports
const express = require('express');
const router = express.Router();

// ? internal imports
const {getSingIn, createUser} = require("../controller/userController")

router.get("/login", getSingIn)
router.post("/signup", createUser)
module.exports = router;