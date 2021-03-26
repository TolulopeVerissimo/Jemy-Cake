from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))
)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    phoneNumber = db.Column(db.String(20))
    username = db.Column(db.String(30), unique=True, nullable=False)
    biography = db.Column(db.String(200))
    profilePicture = db.Column(db.String(255))
    skillLevel = db.Column(db.Integer)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    recipe = db.relationship("Recipe", back_populates="user")
    likes = db.relationship("RecipeLike", back_populates="user")
    pantry = db.relationship("Pantry", back_populates="user")
    # Send = db.relationship("Share", back_populates="userSend", lazy='dynamic')
    # Receive = db.relationship("Notification", back_populates="userReceive", lazy='dynamic')
    # notifications = db.relationship('Notification', back_populates='user', lazy='dynamic')
    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.followed_id == id),
        secondaryjoin=(follows.c.follower_id == id),
        backref=db.backref("follows", lazy="dynamic"),
        lazy="dynamic"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "profilePicture": self.profilePicture,
            "biography":self.biography,
        }
    def new_messages(self):
        last_read_time = self.last_message_read_time or datetime(1900, 1, 1)
        return Message.query.filter_by(recipient=self).filter(Share.timestamp > last_read_time).count()