const app = require('express')()
const config = require('../config')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const locationNameService = require('../services/location_name.service')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


exports.getLocationName = (req, res, next) => {
    console.log('he')
    locationNameService.getLocationName()
        .then(data => res.status(data.status).json(data))
        .catch(err => res.status(err.status).json(err))
};

//get location by name
exports.getLocationByName = (req, res, next) => {
    locationNameService.getLocationByName(req.params.suggestion)
        .then(data => res.status(data.status).json(data))
        .catch(err => res.status(err.status).json(err))
}
//add
exports.addLocationName = (req, res, next) => {
    
        locationNameService.addLocationName(req.body)
            .then(data => {
                res.status(data.status).json(data)
            })
            .catch(err => {
                res.status(err.status).json(err)
            })
};

