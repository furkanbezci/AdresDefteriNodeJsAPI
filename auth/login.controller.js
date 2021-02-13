const express = require('express');
const router = express.Router();
const userService = require('../users/user.service');

// routes
router.post('/login', function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
});

module.exports = router;
