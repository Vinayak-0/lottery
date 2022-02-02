const express=require('express');
const route=express.Router();
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const services=require('../services/render');

const controller= require('../controller/controller');
const { Router } = require('express');
route.get('/',services.homeRoutes);

// route.get("/login",services.login);

route.post('/login', jsonParser,controller.login);
route.post('/register', jsonParser,controller.register);


route.get('/users', jsonParser,controller.find);


//API for slots
// route.post('/api/slots',controller.createSlot);
// route.get('/api/slots',controller.findSlot);



module.exports = route;