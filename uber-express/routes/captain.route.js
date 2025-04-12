const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middlewares');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min: 3}).withMessage('First Name must be at least 3 character long'),
    body('password').isLength({min: 6}).withMessage('password must be at lest 6 character long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at lest 3 character long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at lest 3 character long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be at lest 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type'),
], captainController.registerCaptain)


router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 6}).withMessage('Password must be at lest 6 character long'),
], captainController.loginCaptain);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;