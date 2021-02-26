const axios = require("axios");

function ClienteModel() { }

// porta 8080 para json server
// porta 3000 para app 

ClienteModel.BASE_URL = "http://localhost:8080/clientes";

ClienteModel.prototype.findAll = function(callback){

    axios.get(ClienteModel.BASE_URL)
         .then((resp) => resp.data)
         .then((data) => { callback(data); });

}

ClienteModel.prototype.find = function(_id, callback) {

  axios.get(ClienteModel.BASE_URL+`/${_id}`)
       .then((resp) => resp.data)
       .then((data) => { callback(data); });

};

ClienteModel.prototype.create = function(data, callback) {

  axios.post(ClienteModel.BASE_URL, data)
       .then(resp => { callback(resp.data); })
       .catch(error => { console.log(error); });  

};

ClienteModel.prototype.update = function(_id, data, callback) {
  
  axios.put(ClienteModel.BASE_URL+`/${_id}`, data)
       .then(resp => { callback(resp.data); })
       .catch(error => { console.log(error); });  

};

ClienteModel.prototype.remove = function(_id, callback) {

  axios.delete(ClienteModel.BASE_URL+`/${_id}`)
       .then((resp) => resp.data)
       .then((data) => { callback(data); });

};

module.exports = function () {
  return new ClienteModel();
};

