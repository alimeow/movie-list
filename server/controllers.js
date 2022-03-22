var models = require('./models');

module.exports = {
  //is this get default method?  what language package is this???
  //so controller will handle request from routes, so it's param will be req and res?
  get: function(req, res) {
    //use models' method getAll and take in a parameter which is a callback so format like below:
    models.getAll(function(err, result) {   //how do I know when to set callback as a parameter?***
      //wait what's this result? query result from models?
      if (err) {
        console.log('ERROR: ', err + err.message) {   //does every error has err message?
          res.sendStatus(500);
        }
      }
      res.json(result);
    })
  },


}