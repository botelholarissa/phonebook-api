const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models/repository');
const index = require('./routes/index');
const router = require('./routes/contactsRouter');

db.connect()

app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/contatos", router);


module.exports = app