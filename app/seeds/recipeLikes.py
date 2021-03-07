from app.models import db, RecipeLike
from random import randint


def randomUserSet():
    userSet = {2}

    for i in range(10):
        userSet.add(randint(1, 15))
    return userSet


def seed_recipeLikes():

    likes = []
    for i in range(80):
        users = randomUserSet()
        for user in users:
            likes.append(RecipeLike(userId=user, recipeId=(i+1)))

    for like in likes:
        db.session.add(like)

    db.session.commit()


def undo_recipeLikes():
    db.session.execute('TRUNCATE recipeLikes;')
    db.session.commit()
