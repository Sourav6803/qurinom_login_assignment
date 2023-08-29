const express = require('express');
const router = express.Router();


const {registerAUser , loginUser , updatedUser, getUser, logout } = require('../Controller/userController');
const { authMiddleware} = require("../middleware/authMiddleware")

router.post("/register", registerAUser)
router.post("/login", loginUser)

router.put("/updateUser", authMiddleware, updatedUser)
router.get('/user/:userId', authMiddleware, getUser)

router.post("/logout", logout)

module.exports=router   