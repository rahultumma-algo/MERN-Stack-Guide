const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');

// Public
router.post('/register', userController.register);
router.post('/login', userController.login);

// CRUD (protected)
router.post('/', auth, userController.createUser);
router.get('/', auth, userController.getAllUsers);
router.get('/:id', auth, userController.getUserById);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, isAdmin, userController.deleteUser);

module.exports = router; 