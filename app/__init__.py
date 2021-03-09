import os
import boto3
from botocore.config import Config
import json
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User, Recipe, Ingredient
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.recipe_routes import recipe_routes
from .api.recipeLike_routes import recipeLike_routes
from .api.ingredient_routes import ingredient_routes
from .api.pantry_routes import pantry_routes
from .api.upload_routes import upload_routes
from .seeds import seed_commands
# from .queries import query_commands

from .config import Configuration

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell Flask our seed commands
# app.cli.add_command(query_commands)


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Configuration)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')

app.register_blueprint(recipe_routes, url_prefix='/api/recipes')
app.register_blueprint(recipeLike_routes, url_prefix='/api/recipeLikes')

app.register_blueprint(ingredient_routes, url_prefix='/api/ingredients')
app.register_blueprint(pantry_routes, url_prefix='/api/pantries')
app.register_blueprint(upload_routes, url_prefix='/api/upload')

db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


@app.route('/sign_s3/')
def sign_s3():
    S3_BUCKET = os.environ.get('S3_BUCKET')

    file_name = request.args.get('file_name')
    file_type = request.args.get('file_type')
    s3 = boto3.client('s3', config=Config(
        signature_version='s3v4', region_name="us-east-2"))

    presigned_post = s3.generate_presigned_post(
        Bucket=S3_BUCKET,
        Key=file_name,
        Fields={"acl": "public-read", "Content-Type": file_type},
        Conditions=[
            {"acl": "public-read"},
            {"Content-Type": file_type}
        ],
    )
    return json.dumps({
        'data': presigned_post,
        'url': 'https://%s.s3.amazonaws.com/' % (S3_BUCKET)
    })