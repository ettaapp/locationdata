
const location_name = require('../models/location_name.model')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const locationNameController = require('../controllers/location_name.controller');
const locationNameRoute = new express.Router;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

locationNameRoute.get('/', locationNameController.getLocationName)
locationNameRoute.get('/:suggestion', locationNameController.getLocationByName)
locationNameRoute.post('/', locationNameController.addLocationName)
module.exports = locationNameRoute
