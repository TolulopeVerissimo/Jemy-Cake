from .db import db

recipeItems = db.Table(
    "recipeItems",
    db.Column("ingredientId",db.Integer, db.ForeignKey("ingredients.id")),
    db.Column("recipeId",db.Integer, db.ForeignKey("recipes.id"))
)

class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(2000))
    type = db.Column(db.String(200))
    description = db.Column(db.String(2000))
    instructions = db.Column(db.String(5000))
    steps = db.Column(db.String(5000))
    imagePath = db.Column(db.String(255))
    videoPath = db.Column(db.String(255))

    user = db.relationship("User", back_populates="recipe")
    recipe_like = db.relationship("RecipeLike", back_populates="recipe")   

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    ingredients = db.relationship(
        'Ingredient',
        secondary='recipeItems',
        back_populates='recipes')

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
            'name': self.name,
            'instructions': self.instructions,
            'steps': self.steps,
            'type': self.type,
            'imagePath': self.imagePath,
            'userId': self.userId,
            'username': username,
            'profilePicture': profilePicture,
            'likesUsers': likesUsers,
            'date_created': date
        }
