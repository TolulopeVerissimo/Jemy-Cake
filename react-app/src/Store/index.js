import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import recipeLikesReducer from './recipeLikes'
// import recipeItemsReducer from './recipeItems'
// import pantryItemsReducer from './pantryItems'



// import recipesReducer from './recipes'
// import pantriesReducer from "./pantry";
// import ingredientsReducer from "./ingredients";
import usersReducer from "./user";
import profileReducer from "./profile";
import followsReducer from "./follow";
import sessionReducer from "./session";

const rootReducer = combineReducers({
    // recipeLikes: recipeLikesReducer,
    // recipeItems: recipeItemsReducer,
    // pantryItems: pantryItemsReducer,



    // pantries: pantriesReducer,
    // recipes: recipesReducer,
    // ingredients: ingredientsReducer,
    users: usersReducer,
    profiles: profileReducer,
    follows: followsReducer,
    session: sessionReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
