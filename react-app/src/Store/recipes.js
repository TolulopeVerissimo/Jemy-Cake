const SET_RECIPES = "recipes/SET_RECIPES";
const CREATE_RECIPES = "recipes/CREATE_RECIPES";
const REMOVE_RECIPE = "recipes/REMOVE_RECIPE";
const UPDATE_RECIPE = "recipes/UPDATE_RECIPE";

const setRecipes = (recipes) => {
    return {
        type: SET_RECIPES,
        recipes,
    };
};

const updateRecipes = (recipe) => {
    return {
        type: UPDATE_RECIPE,
        recipe,
    };
};
const removeRecipe = (id) => {
    return {
        type: REMOVE_RECIPE,
        id
    }
}
export const uploadFile = (fileForm) => async (dispatch) => {
    const {
        userId,
        type,
        description,
        instructions,
        steps,
        imagePath,
        videoPath,
        file // this is the file for uploading
    } = fileForm;

    const form = new FormData();
    form.append('userId', userId);
    form.append('type', type);
    form.append('description', description);
    form.append('instructions', instructions);
    form.append('steps', steps);
    form.append('imagePath', imagePath);
    form.append('videoPath', videoPath);
    // repeat as necessary  for each required form field
    form.append('file', file);

    const res = await fetch('/api/recipes', {
        method: "POST",
        body: form
    });
};

export const createRecipe = (recipe) => async dispatch => {
    const { type, instructions, steps, imagePath, videoPath, description, url, userId } = recipe
    const options =
    {
        method: 'RECIPE',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ type, instructions, steps, imagePath, videoPath, description, url, userId })
    }
    const res = await fetch('/api/recipes/', options)
    const json = await res.json()
    dispatch(setRecipes([json]))
}
export const editRecipe = (id, type, instructions, steps, imagePath, videoPath, description, url, userId) => async dispatch => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, instructions, steps, imagePath, videoPath, description, url, userId })
    }
    const res = await fetch(`/api/recipes/${id}`, options)
    if (res.ok) {
        const newRecipe = await res.json()
        dispatch(setRecipes([newRecipe]))
    }
}

export const deleteRecipe = (id) => async dispatch => {
    const options = {
        method: 'DELETE'
    }
    const res = await fetch(`/api/recipes/${id}`, options)
    if (res.ok) {
        dispatch(removeRecipe(id))
    }
}

export const updateRecipeLikes = (like) => async (dispatch) => {
    const { recipeId } = like;
    const response = await fetch(`/api/recipes/${recipeId}`);
    if (response.ok) {
        const res = await response.json();
        dispatch(updateRecipes(res));
    }
    return response;
};

export const getRecipes = () => async (dispatch) => {
    const response = await fetch("/api/recipes/");
    if (response.ok) {
        let res = await response.json();
        dispatch(setRecipes(res.recipes));
    }
    return response;
};
export const getMissingItems = (recipeId) => async (dispatch) => {
    const response = await fetch(`/api/recipes/${recipeId}`);
    if (response.ok) {
        let res = await response.json();
        console.log("getMissingItems", res)
        dispatch(setRecipes(res));
    }
    return response;
};


const initialState = {};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPES:
            const recipes = action.recipes.reduce((acc, ele) => {
                acc[ele.id] = ele;
                return acc;
            }, {});
            return { ...state, ...recipes };
        case CREATE_RECIPES:
            return { ...state, [action.drink.id]: action.drink };
        case REMOVE_RECIPE:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        case UPDATE_RECIPE:
            const newRecipes = { ...state };
            const index = action.recipe.id;
            newRecipes[index] = action.recipe;
            return newRecipes;
        default:
            return state;
    }
};

export default recipesReducer;
