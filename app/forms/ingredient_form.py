from flask_wtf import FlaskForm
from wtforms import HiddenField, StringField
from wtforms.validators import DataRequired


class NewIngredientForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    content = TextAreaField('content',validators=[DataRequired()])


class EditIngredientForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    content = TextAreaField('content',validators=[DataRequired()])
