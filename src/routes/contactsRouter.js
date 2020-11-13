const express = require('express');
const router = express.Router();
const controller = require('../controller/contactsController');

router.get('/', controller.getAll);
router.post('/criar', controller.addContact);
router.get('/nome/:name', controller.getByName);
router.get('/id/:id', controller.getById);
router.delete('/deletar/:id', controller.deleteById);
router.put('/atualizar/telefone/:id', controller.updatePhone);
router.patch('/atualizar', controller.updateContact);


module.exports = router;