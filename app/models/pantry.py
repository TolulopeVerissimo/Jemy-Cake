from .db import db


class Pantry(db.Model):
    __tablename__ = 'pantries'

    id = db.Column(db.Integer, primary_key=True)
    ingredientId = db.Column(db.Integer, db.ForeignKey("ingredients.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    name = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="pantries")
    ingredients = db.relationship("Ingredient", back_populates="pantries")
    pantry_item = db.relationship("PantryItem", back_populates="pantries")
    

    def to_dict(self):
        return {
            "id": self.id,
            "ingredientId": self.ingredientId,
            "userId": self.userId,
            "name": self.name
        }