const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;   //do I have an env file?? (fixed notion?) =*check later*=

app.use(express.static('client/dist'));

//listen to requests
//what's the if (!module.parent) thing in database sprint? can only run when it's run directly?
//what's the point?
//app.listen([port[, host[, backlog]]][, callback])     --[[]][]???
app.listen(PORT, () => {    //callback just to log message?
  console.log(`Server listening on port: ${PORT}`);
})

// maybe I should add ./api path here instead of in routes.js  =*check later*=