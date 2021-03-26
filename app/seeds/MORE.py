import os
from app.models import db, Recipe, Ingredient, Pantry
import requests, json
from flask import request
from random import randint
api = os.environ.get('spoonAPI')
randomRecipeURL =f'https://api.spoonacular.com/recipes/random/?apiKey={api}&number=1'
ingredientWidgetURL =f'https://api.spoonacular.com/recipes/1082038/ingredientWidget/?apiKey={api}'

def retrieve_data(url):
    headers={
        "Application": "spoonacular",

        "Content-Type": "application/json"
    }
    res = requests.get(url, headers={
        "Content-Type": "application/json"
    })
    res = requests.get(url)
    print("OBJECT:::", res.json())

    object = res.json()
    return object

def seed_Repeater():
    all_ingredients = set()
    for i in range(6):
        recipe = retrieve_data(randomRecipeURL)
        recipeObj = recipe["recipes"][0]
        dbRecipeModel = seed_randomRecipe(recipeObj)
        ingredients = seed_randomIngredients(recipeObj, all_ingredients, dbRecipeModel)
        all_ingredients.update(ingredients)
        # seed_Pantry(recipeObj)
    
def slicer(spoonURL,lastCharacterString):
    #ex: "https://spoonacular.com/brussels-sprouts-in-honey-butter-with-chili-flakes-636363"
    numberfromURL = spoonURL 
    firstSlice = numberfromURL.rfind(lastCharacterString)
    x = slice(firstSlice+1,-1)
    return numberfromURL[x] # returns 63636
def seed_randomRecipe(recipeObj):
    num = slicer(recipeObj["spoonacularSourceUrl"],'-')
    url = f'https://spoonacular.com/recipeImages/{num}-636x393.jpg'
    recipe = Recipe(
        name=recipeObj["title"],
        type=recipeObj["dishTypes"],
        description=recipeObj["summary"],
        instructions=recipeObj["instructions"],
        # steps=recipeObj["analyzedInstructions"][0],
        imagePath=url,
        userId=randint(1, 10)
    )
    db.session.add(recipe)
    db.session.commit()
    return recipe

def seed_randomIngredients(recipeObj, all_ingredients, recipe):
    ingredientArray = recipeObj["extendedIngredients"]
    ingredients = []
    for i in range(len(ingredientArray)):
        list = ingredientArray[i]["name"]
        ingredients.append(list)
        item = f'https://spoonacular.com/cdn/ingredients_500x500/{ingredientArray[i]["image"]}'
        ingredient = Ingredient(name=list,image= item)
        if (list not in all_ingredients):
            # db.session.add(ingredient) 
            recipe.ingredients.append(ingredient)
    db.session.commit()
    return ingredients

def seed_one_Pantry(idx):
    recipe = retrieve_data(randomRecipeURL)
    recipeObj = recipe["recipes"][0]

    pantryIngredients = Ingredient.query.all()
    ingredientArray = recipeObj["extendedIngredients"]
    item = f'https://spoonacular.com/cdn/ingredients_500x500/{ingredientArray[0]["image"]}'
    pantry = Pantry(userId=idx, name= ingredientArray[0]['name'], image = item)
    
    print("huUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauua"
    ,pantry.ingredients,pantryIngredients[slice(0,6)])
    [pantry.ingredients.append(i) for i in pantryIngredients[slice(0,6)]]
    # [db.session.add(i) for i in pantryIngredients[slice(0,6)]]
    print("huUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauuahuUUuuwuwuauua"
    ,pantry.ingredients,pantryIngredients[slice(0,6)])
    db.session.add(pantry)
    db.session.commit()
    print(pantry.to_dict())
    return pantry

# def seed_Pantry(recipeObj):
#     ingredientArray = recipeObj["extendedIngredients"]
    
#     for i in range(ingredientArray):
#         list = ingredientArray[i]["name"]
#         item = f'https://spoonacular.com/cdn/ingredients_500x500/{ingredientArray[i]["image"]}'
#         pantryIngredient = Pantry(userId=randint(1, 6), name= list, image = item)
#         if(list no in all_ingredients): recipe.ingredients.append(ingredient)
#     list = [i["name"] for i in ingredientArray]
#     item = [f'https://spoonacular.com/cdn/ingredients_500x500/{i["image"]}' for i in ingredientArray]
    
    
#     items = [Pantry(
#         userId=randint(1, 6),
#         name= list,
#         image = item,
#     )]
#     for item in items:
#         db.session.add(item)
#     db.session.commit()

def undo_recipes_ingredients_pantries():
    db.session.execute('TRUNCATE recipes CASCADE;')
    db.session.execute('TRUNCATE ingredients CASCADE;')
    db.session.execute('TRUNCATE pantries CASCADE;')
    db.session.commit()
