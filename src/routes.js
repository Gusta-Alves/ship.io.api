const express = require('express');
const router = express.Router();

const UsersController = require('./controllers/authController');

router.get('/users', UsersController.getUser);
// router.get('/users/:id', UsersController.getUserByID);
router.get('/users/:idGoogle', UsersController.getUserByIdGoogle);
router.post('/register', UsersController.createUser);
router.put('/register/:idGoogle', UsersController.updateUser);
router.delete('/destroy/:id', UsersController.destroy);

module.exports = router;