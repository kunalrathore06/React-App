const express = require("express");

const router = express.Router();

// const homeController = require("../controller/");

const userController = require("../controller/users_controller");

router.get('/',userController.home);

console.log("inside route")

router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);

router.post('/create', userController.create);

module.exports = router;