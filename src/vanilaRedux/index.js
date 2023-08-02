import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    main: mainReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)