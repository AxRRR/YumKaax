import { createStore, combineReducers } from 'redux'
import { cartReducer } from '../Reducers/cartReducer'

const reducers = combineReducers({
    cart: cartReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)