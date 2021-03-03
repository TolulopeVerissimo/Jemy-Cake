from app.models import db, Recipe, Ingredients, Pantry
from random import randint
import spoonacular as sp
api = sp.API(os.environ.get('spoonAPI'))

#on POST method returns 
# visualizeRecipe

'''
I want to call the API 10 times because 
it only returns one entry per request
'''
# should return recipes object
randomRecipe = sp.API(f'https://api.spoonacular.com/recipes/random/?apiKey=${spoonAPI}')
def seed_randomRecipe():
    for i in range(11):
        numberfromURL = randomRecipe.spooncularSourceUrl
        #https://webknox.com/recipeImages/639267-556x370.jpg
        firstSlice = numberfromURL.rfind('/')
        lastSlice = numberfromURL.rfind('-')
        x = slice(firstSlice,lastSlice)
        num = numberfromURL[x]
        url = f'https://webknox.com/recipeImages/${num}-556x370.jpg'

        recipes = [Recipe(
            name=randomRecipe.recipes.title,
            type=randomRecipe.recipes.dishTypes,
            description=randomRecipe.recipes.summary,
            instructions=randomRecipe.recipes.dishTypes,
            steps=randomRecipe.recipes.analyzedInstructions,
            imagePath=url,
            userId=randint(1, 10)
        )]

    for recipe in recipes:
        db.session.add(recipe)
    db.session.commit()


def seed_randomIngredients():
    for i in range(11):
        ingredientArray = randomRecipe.recipes.extendedIngredients
        for i in ingredientArray:
            list = {
                "id":i.id,
                "name":i.name
                }

        ingredients = [Ingredient(
            name=,
            content= list,
            pantryId=,
            recipeId=
            )]


def undo_recipes&ingredients():
    db.session.execute('TRUNCATE posts CASCADE;')
    db.session.commit()
