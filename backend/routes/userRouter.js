const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// router.route('/')
//     .get(userController.index)
//     .post(userController.store)
router.get('/', userController.index)
// .post(userController.store)

router.post('/add', userController.store)
router.put('/update/:id', userController.update)
router.delete('/delete/:id', userController.delete)

module.exports = router;