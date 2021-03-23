from flask_wtf import FlaskForm
from wtforms import TextAreaField, BooleanField, HiddenField, StringField
from wtforms.validators import DataRequired


class NewRecipeForm(FlaskForm):
    type = StringField('type',validators=[DataRequired()])
    description = TextAreaField('description',validators=[DataRequired()])
    instructions = TextAreaField('instruction',validators=[DataRequired()])
    steps = TextAreaField('steps',validators=[DataRequired()])
    imagePath = HiddenField('imagePath',validators=[DataRequired()])
    videoPath = HiddenField('videoPath',validators=[DataRequired()])


class EditRecipeForm(FlaskForm):
    type = StringField('type',validators=[DataRequired()])
    description = TextAreaField('description',validators=[DataRequired()])
    instructions = TextAreaField('instruction',validators=[DataRequired()])
    steps = TextAreaField('steps',validators=[DataRequired()])
    imagePath = HiddenField('imagePath',validators=[DataRequired()])
    videoPath = HiddenField('videoPath',validators=[DataRequired()])
