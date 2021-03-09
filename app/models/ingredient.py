from .db import db

class Ingredient(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20000), nullable=False)
    image = db.Column(db.String(20000), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
        }