from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Recipe, Pantry, Ingredient,User
from flask_login import login_required
from app.forms import NewRecipeForm, EditRecipeForm
recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route('/')
@login_required
def recipes():
    recipes = Recipe.query.all()
    if recipes[0]:
        return jsonify({"recipes": [recipe.to_dict() for recipe in recipes]})
    else:
        return {'recipes': []}


@recipe_routes.route('/', methods=['POST'])
def new_recipe():
    data = request.get_json()
    print(data)
    description = data['description']
    steps = data['steps']
    instructions = data['instructions']
    imagePath = data['url']
    userId = data['userId']
    new_recipe = Recipe(
        description=description,
        instructions=instructions,
        steps=steps,
        imagePath=imagePath,
        userId=userId
    )
    db.session.add(new_recipe)
    db.session.commit()
    return(data)


@recipe_routes.route('/<int:id>')
@login_required
def recipe(id):
    recipe = Recipe.query.get(id)
    if recipe:
        return jsonify(recipe.to_dict())
    else:
        return {'recipe': []}


@recipe_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_recipe(id):
    data = request.get_json()
    recipe = Recipe.query.get(id)
    recipe.description = data['description']
    recipe.private = data['isPrivate']
    db.session.commit()
    return recipe.to_dict()


@recipe_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_recipe(id):
    recipe = Recipe.query.get(id)
    db.session.delete(recipe)
    db.session.commit()
    return 'Recipe Deleted'

@recipe_routes.route('/<int:id>', methods=['GET'])
@login_required
def missing():
    user = User.query.get(id)
    recipe = Recipe.query.get(id)
    # pantry = Pantry.query.get(id)
    # ingredient = Ingredient.query.get(id)

    pantries = Pantry.query.all()
    recipes = Recipe.query.all()
    ingredients = Ingredient.query.all()

    #I want to filter recipe ingredients by a user's pantry ingredients
    for i in range(len(recipes)):
        if(recipes[i].userId == user):
            #object of food items
            inHouseItems = filter(pantries[i].name, ingredients[i].name)
            pantryItemImage = pantries[i].image 

            goBuyItems = filter(not pantries[i].name, ingredients[i].name)
            ingredientItemImage= ingredients[i].image 

    return {
        'inHouse':inHouseItems,
        'houseImages':pantryItemImage,
        'buyImages':ingredientItemImage,
        'goBuy':goBuyItems
        }
            