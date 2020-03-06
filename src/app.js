'use strict'

const express = require('express');
const bodyParser = require('body-parser');

//Criando aplicação
const app = express();
const router = express.Router();

//Carregando rotas 
const indexRoute = require('./routes/index-route');
const bookRoute = require('./routes/book-route');

//Fazendo o uso do body-parser todo requisição terá seu body convertido pra json
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

//Atribuindo a rota
app.use('/', indexRoute);
app.use('/books', bookRoute);

//Exporta a referencia da classe
module.exports = app;