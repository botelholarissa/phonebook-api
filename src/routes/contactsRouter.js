const express = require('express');
const router = express.Router();
const controller = require('../controller/contactsController');

router.get('/', controller.getAll);
router.post('/criar', controller.addContact);
router.get('/nome/:name', controller.getByName);


module.exports = router;