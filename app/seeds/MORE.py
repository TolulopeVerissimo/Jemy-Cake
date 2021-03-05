from app.models import db, Recipe, Ingredient, Pantry
from random import randint
import spoonacular as sp
api = sp.API(os.environ.get('spoonAPI'))

'''
I want to call the API 10 times because 
it only returns one entry per request
'''
# should return recipes object from PostMan
randomRecipe = sp.API(f'https://api.spoonacular.com/recipes/random/?apiKey=${spoonAPI}')
ingredientWidget = sp.API(f'https://api.spoonacular.com/recipes/1082038/ingredientWidget/?apiKey=${spoonAPI}')

def slicer(spoonURL):
    #ex: https://webknox.com/recipeImages/639267-556x370.jpg
    numberfromURL = spoonURL 
    firstSlice = numberfromURL.rfind('/')
    lastSlice = numberfromURL.rfind('-')
    x = slice(firstSlice,lastSlice)
    return numberfromURL[x] # returns 639267

def seed_randomRecipe():
    for i in range(11):
        num = slicer(randomRecipe.spooncularSourceUrl)
        url = f'https://webknox.com/recipeImages/${num}-556x370.jpg'
        recipes = [Recipe(
            name=randomRecipe.recipes.title,
            type=randomRecipe.recipes.dishTypes,
            description=randomRecipe.recipes.summary,
            instructions=randomRecipe.recipes.instructions,
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
        num = slicer(randomRecipe.spooncularSourceUrl)
        
        for i in ingredientArray:
            list = {
                "id":i.id,
                "name":i.name
                }

        ingredients = [Ingredient(
            name=,
            content= list,
            )]

        for recipe in recipes:
            db.session.add(recipe)

        db.session.commit()



def seedCaller():
    for i in range(11):
        seed_randomRecipe()
        seed_randomIngredients()
    
def undo_recipes&ingredients&pantries():
    db.session.execute('TRUNCATE recipes CASCADE;')
    db.session.execute('TRUNCATE ingredients CASCADE;')
    db.session.execute('TRUNCATE pantries CASCADE;')
    db.session.commit()
