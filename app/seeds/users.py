from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():

    demo = User(
        name='Demo',
        email='demo@aa.io',
        phoneNumber=5551234567,
        hashed_password=generate_password_hash('demo'),
        username='demoUser',
        biography="Am I a Demo User?",
        profilePicture='https://unsplash.com/photos/DN2HD1Pp_Qo',
        skillLevel=10
    )

    gen = User(
        name='Gen',
        email='gen@aa.io',
        hashed_password=generate_password_hash('gen'),
        phoneNumber=5551234567,
        username='genagain',
        biography='Hilarious guy, getting by, teaching at a/A',
        profilePicture='https://unsplash.com/photos/AS80CJTzM5Q',
        skillLevel=1
    )

    ed = User(
        name='Ed',
        email='ed@aa.io',
        hashed_password=generate_password_hash('ed'),
        username='edagain',
        phoneNumber=5551234567,
        biography='Teaching code/growing plants',
        profilePicture='https://unsplash.com/photos/LpjpApXzB3M',
        skillLevel=3
    )

    db.session.add(demo)
    db.session.add(gen)
    db.session.add(ed)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
