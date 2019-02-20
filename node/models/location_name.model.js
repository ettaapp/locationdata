const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Validator = require('validator')
const Schema = mongoose.Schema
const config = require('../config')

var LocationNameSchema = new Schema({
    words: {
        correct: {
            type: String
        },
        suggestion: {
            type: String
        }
    },
    index: {
        type: String
    }
})

module.exports = mongoose.model("location_name",LocationNameSchema)