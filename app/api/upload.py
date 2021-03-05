import boto3
import botocore
from flask import Blueprint, request
from flask_login import login_required

from app.config import Config
from app.aws_s3 import *
from app.models import db, User, Ingredient,Pantry, Recipe


upload_route = Blueprint('file', __name__)

@upload_route.route('/', methods=["POST"])
@login_required
def upload_User:
    if "file" not in request.files:
        return "No user_file key in request.files"

    file = request.files["file"]
    
    if file:
         file_url = upload_file_to_s3(file, Config.S3_BUCKET)

         file = User(
             name=request.form.get('name'),
             email=request.form.get('email'),
             hashed_password=request.form.get('hashed_password'),
             phoneNumber=request.form.get('phoneNumber'),
             username=request.form.get('username'),
             biography=request.form.get('biography'),
             profilePicture=request.form.get('profilePicture'),
             skillLevel=request.form.get('skillLevel'),
         )  
         db.session.add(file)  
         db.session.commit()
         return file.to_dict()  
     else: return No File Attached! 

     
@upload_route.route('/', methods=["POST"])
@login_required
def upload_Ingredient:
    if "file" not in request.files:
        return "No user_file key in request.files"

    file = request.files["file"]
    
    if file:
         file_url = upload_file_to_s3(file, Config.S3_BUCKET)

         file = Ingredient(
             name=request.form.get('name')
             content=request.form.get('content')
             recipeId=request.form.get('recipeId')

             url=file_url
         )  
         db.session.add(file)  
         db.session.commit()
         return file.to_dict()  
     else: return No File Attached! 

@upload_route.route('/', methods=["POST"])
@login_required
def upload_Pantry:
    if "file" not in request.files:
        return "No user_file key in request.files"

    file = request.files["file"]
    
    if file:
         file_url = upload_file_to_s3(file, Config.S3_BUCKET)

         file = Pantry(
             userId=request.form.get('userId')
             name=request.form.get('name')

             url=file_url
         )  
         db.session.add(file)  
         db.session.commit()
         return file.to_dict()  
     else: return No File Attached! 

@upload_route.route('/', methods=["POST"])
@login_required
def upload_Recipe:
    if "file" not in request.files:
        return "No user_file key in request.files"

    file = request.files["file"]
    
    if file:
         file_url = upload_file_to_s3(file, Config.S3_BUCKET)

         file = Recipe(
             user_id=request.form.get('userId'),
             type=request.form.get('type'),
             description=request.form.get('description'),
             instructions=request.form.get('instructions'),
             steps=request.form.get('steps'),
             ingredientId=request.form.get('ingredientId'),
             imagePath=request.form.get('imagePath'),
             videoPath=request.form.get('videoPath'),

             url=file_url
         )  
         db.session.add(file)  
         db.session.commit()
         return file.to_dict()  
     else: return No File Attached! 

