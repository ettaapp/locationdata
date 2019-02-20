import json
from flask import Flask, request
app = Flask(__name__)
from flask_cors import CORS
from flask_jsonpify import jsonify
CORS(app, resources={r"/*": {"origins": "*"}})


file = 'd.json'
with open(file) as train_file:
    data = json.load(train_file)


@app.route('/location_names')
def location_get():
    return jsonify(data)
