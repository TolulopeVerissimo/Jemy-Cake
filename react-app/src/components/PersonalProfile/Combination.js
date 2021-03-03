import React, { useState } from 'react'
import Box from './RecipeBox.js'
import './combo.css'
import './recipe.css'

// https://codepen.io/Lakston/pen/QKqpLz?editors=0110

function Combo(props) {

    const [recipeList, setRecipeList] = useState(
        //removed brackets from around recipeList to map thru it
        [
            {
                name: 'Pumpkin Pie',
                ingredients: ['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']
            },

            {
                name: 'Spaghetti',
                ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']
            },

            {
                name: 'Onion Pie',
                ingredients: ['Onion', 'Pie Crust', 'Sounds Yummy right?']
            }
        ]
    )

    let list = recipeList
    console.log("Global:", list)
    const editRecipe = (id) => {

        let name = document.getElementById('name' + id).value
        let ingr = document.getElementById('ingr' + id).value.split(",")
        // let list = recipeList
        list[id] = {
            name: name,
            ingredients: ingr
        }
        setRecipeList(list)
    }

    let currList = recipeList
    const addRecipe = () => {
        let name = document.getElementById("name").value
        let ingredients = document.getElementById("ingredients").value.split(",")
        // let currList = recipeList
        let newRecipe = {
            name: name,
            ingredients: ingredients
        }
        // currList.push(newRecipe)
        currList = { recipeList, ...newRecipe }
        setRecipeList(currList)
    }

    const deleteRecipe = (i) => {

        // let list = recipeList
        list.splice(i, 1)
        setRecipeList(list)
    }

    const removeSpaces = (name) => {
        let noSpace = name.replace(/\s+/g, '')
        return noSpace
    }

    const List = (props) => {
        console.log(recipeList)
        console.log("List", list)
        //I cant map through list
        //Another useState for list?

        return (
            <div className="panel-group" id="accordion" role="tablist" >
                {/* { list.map((recipe, i) => <Box key={i} name={recipe.name} ingredients={recipe.ingredients} id={i} nospace={props.nospace} delete={props.delete.bind(this, i)} editRecipe={props.edit.bind(this, i)} />)} */}
                {/* { recipeList.map((recipe, i) => <Box key={i} name={recipe.name} ingredients={recipe.ingredients} id={i} nospace={props.nospace} delete={props.delete.bind(this, i)} editRecipe={props.edit.bind(this, i)} />)} */}
            </div>
        )
    }

    return (
        <div className='jumbotron' style={{ color: 'white' }}>
            <h1>Recipe Box</h1>
            <List nospace={removeSpaces} list={recipeList} delete={deleteRecipe} edit={editRecipe} />


            <button type='button' className='btn btn-success' data-toggle='modal' data-target='#addRecipe'>Add a Recipe</button>
            <div id='addRecipe' className='modal fade' role='dialog'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add a Recipe</h4>
                        </div>

                        <div className='modal-body text-left'>
                            <label htmlFor='name' >Recipe Name</label>
                            <input type='text' className='form-control' id='name' placeholder="Name your recipe" required></input>
                            <label htmlFor='ingredients'>Ingredients</label>
                            <textarea className='form-control' id='ingredients' placeholder="Enter Ingredients,Separated,By,Commas" required></textarea>
                        </div>

                        <div className='modal-footer text-center'>
                            <button type='button' className='btn btn-primary' data-dismiss="modal" onClick={addRecipe}>Add Recipe</button>
                            <button type='button' className='btn btn-default' data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Combo