import os
from app.models import db, Recipe, Ingredient, Pantry
import requests
from random import randint
api = os.environ.get('spoonAPI')

import requests

randomRecipeURL =f'https://api.spoonacular.com/recipes/random/?apiKey=${api}'
ingredientWidgetURL =f'https://api.spoonacular.com/recipes/1082038/ingredientWidget/?apiKey=${api}'

def retrieve_data(url):
    headers={
        "accept": "application/vnc.api+json",
        "Content-Type": "application/vnc.api+json"
    }
    res = requests.get(url, headers=headers)
    json = res.json()
    return json

def seedCaller():
    for i in range(11):
        retrieve_data(randomRecipeURL)
        seed_randomRecipe(json)
        seed_randomIngredients(json)
    
def slicer(spoonURL):
    #ex: https://webknox.com/recipeImages/639267-556x370.jpg
    numberfromURL = spoonURL 
    firstSlice = numberfromURL.rfind('/')
    lastSlice = numberfromURL.rfind('-')
    x = slice(firstSlice,lastSlice)
    return numberfromURL[x] # returns 639267

def seed_randomRecipe(json):
    num = slicer(json[spooncularSourceUrl])
    url = f'https://webknox.com/recipeImages/${num}-556x370.jpg'
    recipes = [Recipe(
        name=json[recipes][title],
        type=json[recipes][dishTypes],
        description=json[recipes][summary],
        instructions=json[recipes][instructions],
        steps=json[recipes][analyzedInstructions],
        imagePath=url,
        userId=randint(1, 10)
    )]
    for recipe in recipes:
        db.session.add(recipe)
    db.session.commit()

def seed_randomIngredients(json):

    ingredientArray = json[recipes][extendedIngredients]
    num = slicer(json[spooncularSourceUrl])
    list = []
    for i in ingredientArray:
        list.append({i[id]:i[name]})
        return list

    ingredients = [Ingredient(
        # name=name,
        # content already has both name and id
        content= list,
        )]
    for ingredient in ingredients:
        db.session.add(ingredient)
    db.session.commit()




def undo_recipes_ingredients_pantries():
    db.session.execute('TRUNCATE recipes CASCADE;')
    db.session.execute('TRUNCATE ingredients CASCADE;')
    db.session.execute('TRUNCATE pantries CASCADE;')
    db.session.commit()
