const Ordenes = require('../models/Ordenes');

//agrega nueva orden
exports.nuevaOrden = async (req, res, next) => {
    const orden = new Ordenes(req.body);

    try {
        await orden.save();
        res.json({mensaje: 'Se agrego una nueva orden'})
    } catch (error) {
        console.log(error);
        next();
    }
    console.log(req.body);
}

//mostrar todas las ordenes
exports.mostrarOrdenes = async (req, res, next) => {
    try {
        //obtener todas las ordenes
        const ordenes = await Ordenes.find({}).populate('clientes').populate({
            path: 'orden.servicio',
            model: 'Servicios'
        });
        res.json(ordenes);
    } catch (error) {
        console.log(error);
        next();
    }
}

//mostrar una orden por su ID
exports.mostrarOrden = async (req, res, next) => {
    const orden = await Ordenes.findById(req.params.idOrden).populate('clientes').populate({
        path: 'orden.servicio',
        model: 'Servicios'
    });

    if(!orden){
        return res.json({mensaje: 'Esa orden no existe'});
        next();
    }

    return res.json(orden);
}

//actualizar un servicio
exports.actualizarOrden = async (req, res, next) => {
    try {
        let orden = await Ordenes.findOneAndUpdate({ _id: req.params.idOrden}, req.body, {
            new: true
        })
        .populate('clientes')
        .populate({
            path: 'orden.servicio',
            model: 'Servicios'
        });

        res.json(orden);
    } catch (error) {
        console.log(error);
        next();
    }
}

//eliminar un servicio
exports.eliminarOrden = async (req, res, next) => {
    try {
        const orden = await Ordenes.findOneAndDelete({ _id: req.params.idOrden});
        res.json({mensaje: 'La orden se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}