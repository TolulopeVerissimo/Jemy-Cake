from .db import db


class Share(db.Model):
    __tablename__ = 'shares'

    id = db.Column(db.Integer, primary_key=True)
    senderId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    recipientId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    message = db.Column((db.String(20000), nullable=False))
    timestamp = db.Column(db.DateTime,  default=db.func.current_timestamp()))

    userSend = db.relationship("User", back_populates="send")
    userReceive = db.relationship("User", back_populates="receive")
   
    def to_dict(self):
        return {
            "id": self.id,
            "senderId": self.senderId,
            "recipientId": self.recipientId,
            "message": self.message,
            "timestamp": self.timestamp,
        }