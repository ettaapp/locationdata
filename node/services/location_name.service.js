const mongoose = require('mongoose')
const LocationName = require('../models/location_name.model')

// add
exports.addLocationName = data => (
	new Promise((succeed, fail) => {
		data = new LocationName(data)
		data.save(err => {
			if (err) {
				fail({
					status: 500,
					error: err,
					success: false
				})
			} else {
				succeed({
					status: 201,
					data: data,
					success: true
				})
			}
		})
	}))
//getbyname
//get location by name
exports.getLocationByName = (name) => {
    return new Promise((succeed, fail) => {
		name = name.replace(/[^a-zA-Z ]/g, "")
		name = new RegExp(`^${name.toLowerCase()}`, "i");
		LocationName.find({
			 "words.suggestion": name,
		}, (err, suggestion) => {
            if (err) {
                fail({
                    status: 500,
                    error: err,
                    success: false
                })
            } else if (suggestion.length > 0) {
                succeed({
                    status: 200,
                    data: suggestion,
                    success: true
                })
            } else {
                fail({
                    status: 404,
                    success: false,
                    msg: 'no location found'
                })
            }
        })
    })
}
// get
exports.getLocationName = () => (
	new Promise((succeed, fail) => {
		LocationName.find({}, (err, data) => {
			if (err) {
				fail({
					status: 500,
					error: err,
					success: false
				})
			} else {
				succeed({
					status: 200,
					data: data,
					success: true
				})
			}
		})
	}))
