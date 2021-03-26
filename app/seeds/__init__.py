from flask.cli import AppGroup
from app.models import db, User
from .users import seed_users, undo_users, seedPantries
from .more_users import seed_more_users, undo_more_users
from .MORE import seed_Repeater, seed_one_Pantry, undo_recipes_ingredients_pantries
from .recipes import seed_RecipeRepeat, undo_default
from .recipeLikes import seed_recipeLikes, undo_recipeLikes

seed_commands = AppGroup('seed')

@seed_commands.command('users')
def seed_users_seeds():
    seed_users()

# Creates the `flask seed all` command

@seed_commands.command('all')
def seed():
    db.drop_all()
    db.create_all()
    seed_users()
    seed_more_users()
    print(User.query.all())
    # seed_RecipeRepeat()
    # seed_one_Pantry
    seed_Repeater()
    seedPantries()
    seed_recipeLikes()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_more_users()
    undo_default()
    undo_recipes_ingredients_pantries()
    undo_recipeLikes()
    # Add other undo functions here


@seed_commands.command('data')
def seed_data():
    seed_users()
    seed_Repeater
    seed_recipeLikes



@seed_commands.command('more')
def more_users():
    seed_recipeLikes()
    # seed_RecipeRepeat()
