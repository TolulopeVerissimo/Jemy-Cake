from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, RecipeLike


recipeLike_routes = Blueprint('recipeLikes', __name__)


@recipeLike_routes.route('/', methods=['POST'])
@login_required
def recipeLike():
    likes = RecipeLike.query.all()
    newLike = request.get_json()
    userId = newLike['userId']
    recipeId = newLike['recipeId']
    for like in likes:
        if int(like.userId) == int(userId) and int(like.recipeId) == int(recipeId):
            db.session.delete(like)
            db.session.commit()
            return({"userId": like.userId, "recipeId": like.recipeId})

    new_recipeLike = RecipeLike(userId=userId, recipeId=recipeId)
    db.session.add(new_recipeLike)
    db.session.commit()
    return(newLike)
