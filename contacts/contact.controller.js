const express = require('express');
const router = express.Router();
const contactService = require('./contact.service');

router.post('/', (req, res, next)=> {
    contactService.getAll(req.body.userid)
        .then(contacts => res.json(contacts))
        .catch(next);
});

router.post('/create', (req, res, next)=> {
    res.json(contactService.create(req.body))
});
router.post('/update', (req, res, next)=> {
    res.json(contactService.update(req.body))
});

router.post('/delete', (req, res, next)=> {
    res.json(contactService.deletec(req.body))
});
module.exports = router;