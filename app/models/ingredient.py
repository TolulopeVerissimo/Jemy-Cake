from .db import db

class Ingredient(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String(20000), nullable=False)
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "content": self.content,
        }