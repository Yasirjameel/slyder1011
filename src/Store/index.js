import {
    applyMiddleware, createStore
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducer'
const middleware = [thunk]

const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;