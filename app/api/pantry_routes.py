from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Pantry
from flask_login import login_required
from app.forms import NewPantryForm, EditPantryForm
pantry_routes = Blueprint('pantries', __name__)


@pantry_routes.route('/')
@login_required
def pantries():
    pantries = Pantry.query.all()
    if pantries[0]:
        return jsonify({"pantry": [pantry.to_dict() for pantry in pantries]})
    else:
        return {'pantry': []}


@pantry_routes.route('/', methods=['POST'])
def new_pantry():
    data = request.get_json()
    print(data)
    userId = data['userId']
    name = data['name']
    image = data['image']
    new_pantry= Pantry(
        name=name,
        userId=userId,
    )
    db.session.add(new_pantry)
    db.session.commit()
    return(data)


@pantry_routes.route('/<int:id>')
@login_required
def pantry(id):
    pantry = Pantry.query.get(id)
    if pantry:
        return jsonify(pantry.to_dict())
    else:
        return {'pantry': []}


@pantry_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_pantry(id):
    data = request.get_json()
    pantry= Pantry.query.get(id)
    pantry.name = data['name']
    print(pantry.name)
    pantry.userId = data['userId']
    pantry.image = data['image']
    db.session.commit()
    return pantry.to_dict()


@pantry_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_pantry(id):
    pantry = Pantry.query.get(id)
    db.session.delete(pantry)
    db.session.commit()
    return 'Pantry Deleted'