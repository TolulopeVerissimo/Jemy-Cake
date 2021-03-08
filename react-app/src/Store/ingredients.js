const SET_INGREDIENTS = "ingredients/SET_INGREDIENTS";
const CREATE_INGREDIENTS = "ingredients/CREATE_INGREDIENTS";
const REMOVE_INGREDIENT = "ingredients/REMOVE_INGREDIENT";
const UPDATE_INGREDIENT = "ingredients/UPDATE_INGREDIENT";

const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        ingredients,
    };
};

const updateIngredients = (ingredients) => {
    return {
        type: UPDATE_INGREDIENT,
        ingredients,
    };
};

const removeIngredient = (id) => {
    return {
        type: REMOVE_INGREDIENT,
        id
    }
}

export const uploadFile = (fileForm) => async (dispatch) => {
    const {
        name,
        content,
        file // this is the file for uploading
    } = fileForm;

    const form = new FormData();
    form.append('name', name);
    form.append('content', content);
    // repeat as necessary  for each required form field
    form.append('file', file);

    const res = await fetch('/api/ingredients', {
        method: "POST",
        body: form
    });
};

export const createIngredient = (ingredients) => async dispatch => {
    const { name, content } = ingredients
    const options =
    {
        method: 'INGREDIENT',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ name, content })
    }
    const res = await fetch('/api/ingredients/', options)
    const json = await res.json()
    dispatch(setIngredients([json]))
}
export const editIngredient = (id, name, content) => async dispatch => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, content })
    }
    const res = await fetch(`/api/ingredients/${id}`, options)
    if (res.ok) {
        const newIngredient = await res.json()
        dispatch(setIngredients([newIngredient]))
    }
}

export const deleteIngredient = (id) => async dispatch => {
    const options = {
        method: 'DELETE'
    }
    const res = await fetch(`/api/ingredients/${id}`, options)
    if (res.ok) {
        dispatch(removeIngredient(id))
    }
}


export const getIngredients = () => async (dispatch) => {
    const response = await fetch("/api/ingredients/");
    if (response.ok) {
        let res = await response.json();
        dispatch(setIngredients(res.ingredients));
    }
    return response;
};

const initialState = {};

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENTS:
            // const ingredients = action.ingredients.reduce((acc, ele) => {
            //     acc[ele.id] = ele;
            //     return acc;
            // }, {});
            // return { ...state, ...ingredients };
            return { ...state, ...{ [action.ingredients]: action.ingredients } };
        case CREATE_INGREDIENTS:
            return { ...state, [action.ingredients.id]: action.ingredients };
        case REMOVE_INGREDIENT:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        case UPDATE_INGREDIENT:
            const newIngredients = { ...state };
            const index = action.ingredients.id;
            newIngredients[index] = action.ingredients;
            return newIngredients;
        default:
            return state;
    }
};

export default ingredientsReducer;
