const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/reprograma"; //usei o criado da semana passada

const connect = () => {
    mongoose.connect(DB_URL, { useNewUrlParser: true});
    const connection = mongoose.connection;

    connection.on('error', () => console.error('Error ao conectar.'));
    connection.once('open', () => console.log('Conectamos no Mongo'));
}

module.exports = { connect };

//arquivo Repository CRIA a conexão com nosso Banco de Dados, nesse caso o MongoDB