from .db import db


class Ingredients(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String(20000), nullable=False)
    pantryId = db.Column(db.Integer, db.ForeignKey("pantries.id"), nullable=False)
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)

    pantries = db.relationship("Pantry", back_populates="ingredients")
    pantryItems = db.relationship("PantryItem", back_populates="ingredients")
    recipe = db.relationship("Recipe", back_populates="ingredients")
    recipeItems = db.relationship("RecipeItem", back_populates="ingredients")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "content": self.content,
        }