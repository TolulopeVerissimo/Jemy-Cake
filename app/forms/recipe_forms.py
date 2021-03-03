from flask_wtf import FlaskForm
from wtforms import TextAreaField, BooleanField, HiddenField


class NewRecipeForm(FlaskForm):
    description = TextAreaField('description')
    private = BooleanField('private')
    imagePath = HiddenField('imagePath')


class EditRecipeForm(FlaskForm):
    description = TextAreaField('description')
    private = BooleanField('private')
