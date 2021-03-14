from app.models import db, User
from werkzeug.security import generate_password_hash
from faker import Faker
from pexels_api import API
import os

fake = Faker()
api = API(os.environ.get('PEXEL_API_KEY'))

api.search('person', page=1, results_per_page=20)
photos = api.get_entries()
for photo in photos:
    print(photo.original)

def seed_more_users():

    users = [User(
        name=fake.name(),
        email=fake.email(),
        username=fake.user_name(),
        hashed_password=generate_password_hash('pass'),
        biography=fake.sentence(),
        profilePicture=photos[i].small) for i in range(7)]

    for user in users:
        db.session.add(user)

    db.session.commit()

def undo_more_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()