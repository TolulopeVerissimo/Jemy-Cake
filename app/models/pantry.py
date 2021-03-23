from .db import db

pantryItems=db.Table(
    "pantryItems",
    db.Column("ingredientId",db.Integer, db.ForeignKey("ingredients.id")),
    db.Column("pantryId",db.Integer, db.ForeignKey("pantries.id"))
)

class Pantry(db.Model):
    __tablename__ = 'pantries'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(4000), nullable=False)
    image = db.Column(db.String(4000), nullable=False)

    user = db.relationship("User", back_populates="pantry")

    ingredients = db.relationship(
        'Ingredient',
        secondary='pantryItems',
        back_populates='pantries')

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
            "image":self.image
        }