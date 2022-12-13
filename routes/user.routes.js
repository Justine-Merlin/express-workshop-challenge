const router = require('express').Router();
const userController = require('../controllers/user.controllers');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

module.exports = router;