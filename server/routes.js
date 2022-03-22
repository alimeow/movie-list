var controller = require(controllers) //connect controller
var router = require('express').Router();  //create a router to handle request. what's the optional param?
//ok then what is with require('express') then var app = express() then whatever method?

//Build an express get route /api/movies that returns all the movies from the database *****
router.get('/api/movies', controller.getAll);  //or do we set /api in app? where's this .listen() thing go?  ***** --ok in ./index where express is used. =*check later in next step*=
// router.post('', controller.xxxxx.post);