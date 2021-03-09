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
        profilePicture='https://images.unsplash.com/photo-1560579183-b7c69367cb00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        skillLevel=10
    )

    gen = User(
        name='Squirrel',
        email='squirrel@aa.io',
        hashed_password=generate_password_hash('gen'),
        phoneNumber=5551234567,
        username='notgenagain',
        biography='A51 Escapee. A1 sauce on my nuts. I\'m a talking Squirrel.',
        profilePicture='https://images.unsplash.com/photo-1560794081-cb99dfca74ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
        skillLevel=1
    )

    ed = User(
        name='NotEd',
        email='noted@aa.io',
        hashed_password=generate_password_hash('ed'),
        username='notedagain',
        phoneNumber=5551234567,
        biography='That call me Left Hook because my favorite game is PunchOut. I\'ll knock ya lights out!',
        profilePicture='https://images.unsplash.com/photo-1573878415613-fe2a3f769cab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        skillLevel=3
    )

    db.session.add(demo)
    db.session.add(gen)
    db.session.add(ed)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
