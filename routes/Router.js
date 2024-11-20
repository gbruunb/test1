const express = require('express')
const router = express.Router()

const PEARLController = require('../controllers/PEARLController')

router.get('/',PEARLController.index) // index
router.get('/student/login',PEARLController.studentLogin) // student login
router.get('/child/login',PEARLController.childLogin) // child login
router.get('/elder/login',PEARLController.elderLogin) // elder login

router.post('/login',PEARLController.login) // login




module.exports = router; // export router