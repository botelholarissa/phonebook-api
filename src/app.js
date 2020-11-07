const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

const index = require('./routes/index');
//const router = require('./routes/phonebookRouter');


app.use("/", index);
//app.use("/contatos", router);


module.exports = app