from .db import db


class RecipeLike(db.Model):
    __tablename__ = 'recipeLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    user = db.relationship("User", back_populates="likes")
    recipe = db.relationship("Recipe", back_populates="recipe_like")

    def to_list(self):
        return self.userId
