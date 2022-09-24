/** Hacemos uso de la clase Router para crear manejadores de rutas */
// import { Router } from 'express'
const express = require("express");
router = express.Router();
jsonRoute = require("../controllers/jsonController")
router.get("/", jsonRoute.jsonController)

module.exports = router;



/* Ahora vamos a importas las consultas que 
vamos a utilizar con cajas de productos*/
// import { guardarCaja, obtenerCajas, eliminarCaja } from '../controllers/cajaProductos.controller.js';

// Creamos una instrancia de la clase Router
// const router = Router();

// Rutas a utilizar con lo relacionado a las cajas de productos
// router.post('/cajaProductos', guardarCaja); 
// router.get('/cajaProductos', obtenerCajas); 
// router.delete('/cajaProductos/:codigo_caja', eliminarCaja); 

// Exportamos nuestra instancia para poder consumirla desde otro sitio
// export default router;