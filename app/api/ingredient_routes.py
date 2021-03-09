from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Ingredient
from flask_login import login_required
from app.forms import NewIngredientForm, EditIngredientForm
ingredient_routes = Blueprint('ingredients', __name__)


@ingredient_routes.route('/')
@login_required
def ingredients():
    ingredients = Ingredient.query.all()
    if ingredients[0]:
        return jsonify({"ingredient": [ingredient.to_dict() for ingredient in ingredients]})
    else:
        return {'ingredient': []}


@ingredient_routes.route('/', methods=['POST'])
def new_ingredient():
    data = request.get_json()
    print(data)
    name = data['name']
    image = data['image']
    new_ingredient= Ingredient(
        name=name,
        image=image
    )
    db.session.add(new_ingredient)
    db.session.commit()
    return(data)


@ingredient_routes.route('/<int:id>')
@login_required
def ingredient(id):
    ingredient = Ingredient.query.get(id)
    if ingredient:
        return jsonify(ingredient.to_dict())
    else:
        return {'ingredient': []}


@ingredient_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_ingredient(id):
    data = request.get_json()
    ingredient= Ingredient.query.get(id)
    ingredient.name = data['name']
    ingredient.image = data['image']
    db.session.commit()
    return ingredient.to_dict()


@ingredient_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_ingredient(id):
    ingredient = Ingredient.query.get(id)
    db.session.delete(ingredient)
    db.session.commit()
    return 'Ingredient Deleted'