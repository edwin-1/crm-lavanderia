const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');

//conectar mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/restapis', {
    useNewUrlParser: true
})

//crear el servidor
const app = express();

app.use(express.json());

//habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//habilitar cors
app.use(cors());

//rutas de la app
app.use('/', routes());

//puerto
app.listen(5000);