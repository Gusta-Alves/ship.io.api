const express = require('express');
const router = express.Router();

const UsersController = require('./controllers/authController');

router.get('/users', UsersController.getUser);
// router.get('/users/:id', UsersController.getUserByID);
router.get('/users/:idGoogle', UsersController.getUserByIdGoogle);
router.post('/register', UsersController.createUser);
router.put('/register/:idGoogle', UsersController.updateUser);
router.put('/register/barcocash/:idGoogle', UsersController.updateBarcoCash);
router.put('/register/barcocoin/:idGoogle', UsersController.updateBarcoCoin);
router.put('/register/redecash/:idGoogle', UsersController.updateRedeCash);
router.put('/register/redecoin/:idGoogle', UsersController.updateRedeCoin);
router.delete('/destroy/:id', UsersController.destroy);

module.exports = router;