import spoonacular as sp
api = sp.API(os.environ.get('spoonAPI'))

#on POST method returns 
visualizeRecipe

# should return recipes object
randomRecipe = sp.API(f'https://api.spoonacular.com/recipes/random/?apiKey=${spoonAPI}')
def seed_randomRecipe():
    for i in range(11):

        recipes = [Recipe(
            name=randomRecipe.recipes.title,
            type=randomRecipe.recipes.dishTypes,
            description=randomRecipe.recipes.summary,
            instructions=randomRecipe.recipes.dishTypes,
            steps=randomRecipe.recipes.analyzedInstructions,
            imagePath=randomRecipe.recipes.analyzedInstructions,
            userId=randint(1, 15) #for i in range(11)
        )]
    for recipe in recipes:
        db.session.add(recipe)
    db.session.commit()

