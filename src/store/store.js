import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../Reducers/authReducer';
import { cartReducer } from '../Reducers/cartReducer'

const reducers = combineReducers({
    auth: authReducer,
    cart: cartReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)