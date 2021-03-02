from .db import db


class PantryItem(db.Model):
    __tablename__ = 'pantryItems'

    id = db.Column(db.Integer, primary_key=True)
    ingredientId = db.Column(db.Integer, db.ForeignKey("ingredients.id"), nullable=False)
    pantryId = db.Column(db.Integer, db.ForeignKey("pantries.id"), nullable=False)

    ingredient = db.relationship("Ingredient", back_populates="ingredients")
    pantry = db.relationship("Pantry", back_populates="pantries")

    def to_list(self):
        return {self.ingredientId, self.pantryId}
