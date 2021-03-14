const SET_PANTRIES = "pantries/SET_PANTRIES";
const CREATE_PANTRIES = "pantries/CREATE_PANTRIES";
const REMOVE_PANTRY = "pantries/REMOVE_PANTRY";
const UPDATE_PANTRY = "pantries/UPDATE_PANTRY";

const setPantries = (pantries) => {
    return {
        type: SET_PANTRIES,
        pantries,
    };
};

const updatePantries = (pantry) => {
    return {
        type: UPDATE_PANTRY,
        pantry,
    };
};

const removePantry = (id) => {
    return {
        type: REMOVE_PANTRY,
        id
    }
}

export const uploadFile = (fileForm) => async (dispatch) => {
    const {
        userId,
        name,
        image,
        file // this is the file for uploading
    } = fileForm;

    const form = new FormData();
    form.append('userId', userId);
    form.append('name', name);
    form.append('image', image);
    // repeat as necessary  for each required form field
    form.append('file', file);

    const res = await fetch('/api/pantries', {
        method: "POST",
        body: form
    });
};

export const createPantry = (pantry) => async dispatch => {
    const { name, userId, image } = pantry
    const options =
    {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ name, userId, image })
    }
    const res = await fetch('/api/pantries/', options)
    const json = await res.json()
    dispatch(setPantries([json]))
}
export const editPantry = (id, name, userId, image) => async dispatch => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, userId, image })
    }
    const res = await fetch(`/api/pantries/${id}`, options)
    if (res.ok) {
        const newPantry = await res.json()
        dispatch(setPantries([newPantry]))
    }
}

export const deletePantry = (id) => async dispatch => {
    const options = {
        method: 'DELETE'
    }
    const res = await fetch(`/api/pantries/${id}`, options)
    if (res.ok) {
        dispatch(removePantry(id))
    }
}

export const getPantries = () => async (dispatch) => {
    const response = await fetch("/api/pantries/");
    if (response.ok) {
        let res = await response.json();
        dispatch(setPantries(res.pantry));
    }
    return response;
};

const initialState = {};

const pantriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PANTRIES:
            const pantries = action.pantries.reduce((acc, ele) => {
                acc[ele.id] = ele;
                return acc;
            }, {});
            return { ...state, ...pantries };
        case CREATE_PANTRIES:
            return { ...state, [action.pantry.id]: action.pantry };
        case REMOVE_PANTRY:
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        case UPDATE_PANTRY:
            const newPantries = { ...state };
            const index = action.pantry.id;
            newPantries[index] = action.pantry;
            return newPantries;
        default:
            return state;
    }
};

export default pantriesReducer;
