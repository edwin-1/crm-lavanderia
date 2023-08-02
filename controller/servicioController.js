const Servicios = require('../models/Servicios');

//agrega nuevo servicio
exports.nuevoServicio = async (req, res, next) => {
    const servicio = new Servicios(req.body);

    try {
        await servicio.save();
        res.json({mensaje: 'Se agrego un nuevo servicio'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//mostrar todos los servicio
exports.mostrarServicios = async (req, res, next) => {
    try {
        //obtener todos los servicios
        const servicios = await Servicios.find({});
        res.json(servicios);
    } catch (error) {
        console.log(error);
        next();
    }
}

//muestra un servicio por su ID
exports.mostrarServicio = async (req, res, next) => {
    const servicio = await Servicios.findById(req.params.idServicio);

    if(!servicio){
        return res.json({mensaje: 'Ese servicio no existe'});
        next();
    }

    return res.json(servicio);
}

// actualizar un servicio
exports.actualizarServicio = async(req, res, next) => {
    try {
        const servicio = await Servicios.findOneAndUpdate({_id: req.params.idServicio},
            req.body, {
                new: true
            });
            res.json(servicio);
    } catch (error) {
        console.log(error);
        next();
    }
}

//eliminar un servicio
exports.eliminarServicio = async(req, res, next) => {
    try {
        const servicio = await Servicios.findOneAndDelete({_id: req.params.idServicio});
        res.json({mensaje: 'El servicio se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.buscarServicio = async(req, res, next) => {
    try {
        //obtener el query
        const {query} = req.params;
        const servicio = await Servicios.find({nombre: new RegExp(query, 'i')});
        res.json(servicio);
        
    } catch (error) {
        console.log(error);
        next();
    }
}