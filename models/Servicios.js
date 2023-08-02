const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviciosSchema = new Schema({
    
    nombre : {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Servicios', serviciosSchema);