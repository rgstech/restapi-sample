const express = require("express");
const router  = express.Router();

const ClienteModel      = require("../models/ClienteModel")();
const ClienteController = require("../controllers/ClienteController")(ClienteModel);



router.get("/:id", (req, res, next) => {
 
  let _id = req.params.id;

  ClienteController.getById(_id, retCliente);
  
        function retCliente(rclientes) {        
          res.json(rclientes);
        }

});


router.get('/', (req, res) => {   
  
  ClienteController.getAll(retCliente);
  
  function retCliente(rclientes) {  
   res.json(rclientes);
  }
 
}); 


router.post('/', (req, res) => {   

    let data = req.body;

    ClienteController.create(data, retCliente) ;
  
    function retCliente(rclientes) {  
     res.json(rclientes);
    }
   
}); 


router.put('/:id', (req, res) => {   

  let data = req.body;
  let _id  = req.params.id;
  
  ClienteController.update(_id, data, retCliente) ;

  function retCliente(rclientes) {
   res.json(rclientes);
  }
}); 


router.delete("/:id", (req, res, next) => {
 
  let _id = req.params.id;

  ClienteController.remove(_id, retCliente) ;
  
        function retCliente(rclientes) {
          res.json(rclientes);
        }

});
module.exports = router;
