const express = require("express");

const router = express.Router();

const userController = require("../controller/users_controller");

console.log("inside route")
router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signIn);

module.exports = router;