from flask.cli import AppGroup
from .users import seed_users, undo_users
from .more_users import seed_more_users, undo_more_users
from .MORE import seed_randomRecipe, seed_randomIngredients, undo_recipes&ingredients&pantries
from .recipeLikes import seed_recipeLikes, undo_recipeLikes

seed_commands = AppGroup('seed')

@seed_commands.command('users')
def seed_users_seeds():
    seed_users()

# Creates the `flask seed all` command

@seed_commands.command('all')
def seed():
    seed_users()
    seed_randomRecipe()
    seed_randomIngredients()
    # seed_recipeLikes
    # seed_recipeLikes()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_more_users()
    undo_recipes&ingredients&pantries
    # undo_recipeLikes
    # Add other undo functions here


@seed_commands.command('data')
def seed_data():
    seed_users()
    seed_randomRecipe()
    seed_randomIngredients()
    # seed_recipeLikes

# @seed_commands.command('more_posts')
# def more_posts():
#     # seed_more_posts()


@seed_commands.command('more_users')
def more_users():
    seed_more_users()
