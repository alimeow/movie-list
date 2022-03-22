var db = require('./db');

module.exports = {
  getAll: function(callback) {
    queryString = 'SELECT * FROM movies';
    db.query(queryString, function(err, callback) {    //have problem navigating callback hell... in CRUDY
      //callback or error first? maybe error first to foolprove
      // if (err) {
      // } else {}      //wait this if else wasn't used but run callback directly. Why?
      callback(null, callback);    //why just set err to null and not if else?? *=need solving=*
    });
  }


}
