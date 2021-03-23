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

def seed_RecipeRepeat():
    for i in range(6):
        recipe = retrieve_data(randomRecipeURL)
        recipeObj = recipe["recipes"][0]
        seed_defaultRecipe(recipeObj)
        seed_defaultIngredients(recipeObj)
        seed_defaultPantry(recipeObj)
    
def slicer(spoonURL,lastCharacterString):
    #ex: "https://spoonacular.com/brussels-sprouts-in-honey-butter-with-chili-flakes-636363"
    numberfromURL = spoonURL 
    firstSlice = numberfromURL.rfind(lastCharacterString)
    x = slice(firstSlice+1,-1)
    return numberfromURL[x] # returns 63636

def seed_defaultRecipe(recipeObj):
    num = slicer(recipeObj["spoonacularSourceUrl"],'-')
    url = f'https://spoonacular.com/recipeImages/{num}-636x393.jpg'
    recipes = [Recipe(
        name=recipeObj["title"],
        type=recipeObj["dishTypes"],
        description=recipeObj["summary"],
        instructions=recipeObj["instructions"],
        # steps=recipeObj["analyzedInstructions"][0],
        imagePath=url,
        userId=randint(1, 3)
    )]
    for recipe in recipes:
        db.session.add(recipe)
    db.session.commit()

def seed_defaultIngredients(recipeObj):

    ingredientArray = recipeObj["extendedIngredients"]
    list = [i["name"] for i in ingredientArray]
    item = [f'https://spoonacular.com/cdn/ingredients_500x500/{i["image"]}' for i in ingredientArray]

    ingredients = [Ingredient(
        name=list,
        image= item,
        )]
    for ingredient in ingredients:
        db.session.add(ingredient)
    db.session.commit()

def seed_defaultPantry(recipeObj):

    ingredientArray = recipeObj["extendedIngredients"]
    list = [i["name"] for i in ingredientArray]
    item = [f'https://spoonacular.com/cdn/ingredients_500x500/{i["image"]}' for i in ingredientArray]


    items = [Pantry(
        userId=randint(1, 10),
        name= list,
        image = item,
    )]
    for item in items:
        db.session.add(item)
    db.session.commit()


def undo_default():
    db.session.execute('TRUNCATE recipes CASCADE;')
    db.session.execute('TRUNCATE ingredients CASCADE;')
    db.session.execute('TRUNCATE pantries CASCADE;')
    db.session.commit()
