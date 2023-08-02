const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordenesSchema = new Schema({
    
    clientes: {
        type: Schema.ObjectId,
        ref: 'Clientes'
    },
    orden: [{
        servicio: {
            type: Schema.ObjectId,
            ref: 'Servicios'
        },
        cantidad: Number,
        tipo: String,
        kilo: Number,
    }],
    total: {
        type: Number
    }
});

module.exports = mongoose.model('Ordenes', ordenesSchema);