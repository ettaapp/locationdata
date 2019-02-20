const http = require('http');
// import node modules
const mongoose = require('mongoose');
const express = require('express');
mongoose.set('useFindAndModify', false)
const app = express();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;
const config = require('./config');
const cors = require('cors');

const HOSTNAME = 'http://localhost:3000' + config.urls.timestamp
app.use(cors());

app.listen(process.env.PORT || 3000)

const connectionUtil = require('./utils/dbConnection.util');
const locationNameRoute = require('./routes/location_name.route');
app.use(config.urls.location_name,locationNameRoute);
// allow CORS
connectionUtil.connect();
app.use(function (req, resp, next) {
	resp.header("Access-Control-Allow-Origin", "*");
	resp.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	resp.header("Access-Control-Allow-Headers", "*");
	next();
});
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Authorization', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	if (req.method === "OPTIONS") {
		res.sendStatus(200);
	} else {
		next();
	}
});
// setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('secret', config.secret);
app.get(config.urls.timestamp, (req, res, next) => {
	res.status(200).json({
		status: 200,
		success: true,
		data: Date.now()
	})
});