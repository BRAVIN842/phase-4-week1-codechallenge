from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from models import db, Hero, Power, HeroPower
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

# Sample API route to get all heroes
@app.route('/heroes', methods=['GET'])
def get_heroes():
    print("Received GET request at /heroes")
    heroes = Hero.query.all()
    heroes_list = [{
        'id': hero.id,
        'name': hero.name,
        'super_name': hero.super_name
    } for hero in heroes]

    response = make_response(jsonify(heroes_list), 200)
    return response