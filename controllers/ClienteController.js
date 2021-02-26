

function ClienteController(ClienteModel) {
  
    this.model = ClienteModel;

}

ClienteController.prototype.getAll = function(callback) {

  this.model.findAll(callback);

};

ClienteController.prototype.getById = function(_id, callback) {

  this.model.find(_id, callback);

};

ClienteController.prototype.create = function(data, callback) {

   this.model.create(data, callback);
};

ClienteController.prototype.update = function(_id, data, callback) {

  this.model.update(_id, data, callback);

};

ClienteController.prototype.remove = function(_id, callback) {

  this.model.remove(_id, callback);

};

module.exports = function (ClienteModel) {
  return new ClienteController(ClienteModel);
};
