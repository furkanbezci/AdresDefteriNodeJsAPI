const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// router.get('/', (req, res, next)=> {
//     userService.getAll()
//         .then(users => res.json(users))
//         .catch(next);
// });
router.post('/UpdateProfile', (req, res, next)=> {
    res.json(userService.updateProfile(req.body))
});

module.exports = router;