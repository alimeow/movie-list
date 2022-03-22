var mysql = reuiqre('mysql2'); //get mysql2 package?

//create a database connection and export it.
const dbConnection = mysql.createConnection({
  //so in database sprint there's no host. We don't have domain name do we need host property?
  user: 'root',
  password: '',
  database: 'movielist', //remember the comma at this last element
});

// dbConnection.connect(); //do we need error function? Is is simply noticing the user or there's more important meaning to it? How to test and find out?

dbConnection.connect(function(err) {
  if (err) {
    console.log('Attention: ', err + err.message);  //so err.message kinda a predefined method
    //no return? what's the point of handling other than visualize.
  }
  console.log('You are connected to MySQL server.')
});

module.exports dbConnection = dbConnection;   //export db