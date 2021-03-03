from flask.cli import AppGroup
from .users import seed_users, undo_users
from .more_users import seed_more_users, undo_more_users
from .recipes import seed_recipes, undo_recipes
from .more_recipes import seed_more_recipes, undo_more_recipes






seed_commands = AppGroup('seed')


@seed_commands.command('users')
def seed_users_seeds():
    seed_users()

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_more_users()
    seed_posts()
    seed_more_posts()
    seed_comments()
    seed_commentLikes()
    seed_postLikes()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_more_users()
    undo_postLikes()
    undo_posts()
    undo_more_posts()
    # Add other undo functions here


@seed_commands.command('data')
def seed_data():
    seed_posts()

    seed_postLikes()


@seed_commands.command('more_posts')
def more_posts():
    seed_more_posts()


@seed_commands.command('more_users')
def more_users():
    seed_more_users()
