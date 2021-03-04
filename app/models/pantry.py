from .db import db

pantryItems=db.Table(
    "pantryItems",
    db.Column("ingredientId",db.Integer, db.ForeignKey("ingredients.id")),
    db.Column("pantryId",db.Integer, db.ForeignKey("pantries.id"))
)

class Pantry(db.Model):
    __tablename__ = 'pantries'
    id = db.Column(db.Integer, primary_key=True)
    # ingredientId = db.Column(db.Integer, db.ForeignKey("ingredients.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="pantry")
    # ingredients = db.relationship("Ingredient", back_populates="pantry")    

    pantry_item = db.relationship(
        "Pantry",
        secondary=pantryItems,
        primaryjoin=(pantryItems.c.ingredientId == id),
        secondaryjoin=(pantryItems.c.pantryId == id),
        backref=db.backref("pantryItems", lazy="dynamic"),
        lazy="dynamic"
    )



    def to_dict(self):
        return {
            "id": self.id,
            "ingredientId": self.ingredientId,
            "userId": self.userId,
            "name": self.name
        }