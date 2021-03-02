from .db import db


class RecipeItem(db.Model):
    __tablename__ = 'recipeItems'

    id = db.Column(db.Integer, primary_key=True)
    ingredientId = db.Column(db.Integer, db.ForeignKey("ingredients.id"), nullable=False)
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)

    ingredients = db.relationship("Ingredient", back_populates="recipeItems")
    recipe = db.relationship("Recipe", back_populates="recipe_items")

    def to_list(self):
        return {self.ingredientId, self.recipeId}
