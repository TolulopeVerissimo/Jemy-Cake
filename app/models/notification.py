from .db import db


class Notification(db.Model):
    __tablename__ = 'notifications'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    timestamp = db.Column(db.DateTime,  default=db.func.current_timestamp()))
    payload_json= db.Column(db.Text)
  
    recipeItems = db.relationship("RecipeItem", back_populates="ingredients")

    def get_data(self):
        return json.loads(str(self.payload_json))
