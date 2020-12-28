import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import authReducer from "./reducers/authReducers";

import carManagmentReducer from "./reducers/carManagmentReducers";


const rootReducer = combineReducers({
    auth: authReducer,
    carManagment: carManagmentReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));