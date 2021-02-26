const express = require('express');
const router  = express.Router();

const clienteRouter = require("./clientes");


router.use('/clientes', clienteRouter);

module.exports = router;
