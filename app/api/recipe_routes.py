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
    type = data['type']
    name = data['name']
    instructions = data['instructions']
    # steps = data['steps']
    imagePath = data['imagePath']
    userId = data['userId']
    new_recipe = Recipe(
        name=name,
        type=type,
        description=description,
        instructions=instructions,
        # steps=steps,
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
    # data = request.form
    # data = request.get_json(force=True)
    # print("DATADATADATADATADATADATADATADATA" ,data) 
    # recipe = Recipe.query.get(id)
    # recipe.type=data['type']
    # recipe.instructions=data['instructions']
    # recipe.imagePath=data['imagePath']
    # recipe.description=data['description']
    # recipe.userId=data['userId']

    recipe = Recipe.query.get(id)
    recipe.type = request.form.get('type')
    
    recipe.instructions = request.form.get('instructions')
    if(request.form.get('imagePath')):
        recipe.imagePath = request.form.get('imagePath')

    recipe.description = request.form.get('description')
    recipe.userId = request.form.get('userId')
    db.session.commit()
    return recipe.to_dict()


@recipe_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_recipe(id):
    recipe = Recipe.query.get(id)
    db.session.delete(recipe)
    db.session.commit()
    return 'Recipe Deleted'

@recipe_routes.route('/<int:id>/missing', methods=['GET'])
@login_required
def missing(id):
    recipes = Recipe.query.filter(Recipe.userId==id).all()
    pantries = Pantry.query.filter(Pantry.userId==id).all()

    setInHouseItems = set() 
    setRequiredItems = set() 
    
    [setInHouseItems.update(p['ingredients']) for p in pantries]  
    [setRequiredItems.update(r['ingredients']) for r in recipes]
    
    goBuyItems= setRequiredItems.difference(setInHouseItems)
    return jsonify({
        'inHouse':[item.to_dict() for item in setInHouseItems],
        'goBuy':[item.to_dict() for item in goBuyItems],

        # 'buyImages':[item.imagePath for item in recipes],
        # 'inStockItemImages':[item.image for item in pantries],
        })