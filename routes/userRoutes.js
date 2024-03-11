const express = require('express')

const router = express.Router();
const userControllsers = require('../controllers/userControllers')


router.route('/')
    .get(userControllsers.getAllUsers)
    .post(userControllsers.creatrUser);

router.route('/:id')
    .get(userControllsers.getUser)
    .patch(userControllsers.updateUser)
    .delete(userControllsers.delUser);

module.exports = router