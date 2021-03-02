from .db import db


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    description = db.Column(db.String(2000))
    album = db.Column(db.String(2000))
    private = db.Column(db.Boolean, nullable=False)
    ingredientId = db.Column(db.Integer)
    imagePath = db.Column(db.String(255))
    videoPath = db.Column(db.String(255))



    user = db.relationship("User", back_populates="recipe")
    recipe_like = db.relationship("RecipeLike", back_populates="recipe")
    recipe_items = db.relationship("RecipeItem", back_populates="recipe")
    ingredients = db.relationship("Ingredient", back_populates="recipe")
   

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    def to_dict(self):
        user = self.user.to_dict()
        username = user["username"]
        profilePicture = user["profilePicture"]

        likesUsers = [like.to_list() for like in self.recipe_like]
        year = self.date_created.strftime('%Y')
        month = self.date_created.strftime('%B')
        day = self.date_created.strftime("%d")
        date = f'{month} {day} {year}'

        return {
            'id': self.id,
            'description': self.description,
            'private': self.private,
            'imagePath': self.imagePath,
            'userId': self.userId,
            'username': username,
            'profilePicture': profilePicture,
            'likesUsers': likesUsers,
            'date_created': date
            # 'comments': self.comments,
        }
