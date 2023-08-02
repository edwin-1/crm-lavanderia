const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clienteController');
const servicioController = require('../controller/servicioController');
const ordenController = require('../controller/ordenController');

module.exports = function(){

    //agrega nuevo clientes via POST
    router.post('/clientes', clienteController.nuevoCliente);

    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //muestra un cliente en espcifico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    //Actualizar un cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    //Eliminar un cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

    //SERVICIOS
    //agrega nuevo servicio via POST
    router.post('/servicios', servicioController.nuevoServicio);

    //obtener todos los clientes
    router.get('/servicios', servicioController.mostrarServicios);

    //muestra un cliente en especifico (ID)
    router.get('/servicios/:idServicio', servicioController.mostrarServicio);

    //actualiza un servicio
    router.put('/servicios/:idServicio', servicioController.actualizarServicio);

    //buscar un servicio
    router.post('/servicios/busqueda/:query', servicioController.buscarServicio)

    //Eliminar un cliente
    router.delete('/servicios/:idServicio', servicioController.eliminarServicio);

    //ORDENES
    //agrega nueva orden via POST
    router.post('/ordenes', ordenController.nuevaOrden);

    //obtener todas las ordenes
    router.get('/ordenes', ordenController.mostrarOrdenes);

    //mostrar ordenes en especifico (ID)
    router.get('/ordenes/:idOrden', ordenController.mostrarOrden);

    //actualizar un servicio
    router.put('/ordenes/:idOrden', ordenController.actualizarOrden);

    //eliminar un servicio
    router.delete('/ordenes/:idOrden', ordenController.eliminarOrden)

    return router;
}