from flask_wtf import FlaskForm
from wtforms import HiddenField, StringField
from wtforms.validators import DataRequired


class NewPantryForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])


class EditPantryForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
