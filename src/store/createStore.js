import { createStore, applyMiddleware, compose, } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import makeRootReducer from './reducers'

const log = createLogger({ diff: true, collapsed: true })

export default (initialState = {}) => {
    //middleware configuration
    // const middleware = { thunk, log }

    //store enhancers
    // const enhancers = []

    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        //TODO: Remove redux logger on production
        applyMiddleware(log),
        // other store enhancers if any
    )

    //store instantiation
    const store = createStore(
        makeRootReducer(),
        initialState,
        enhancer
    )

    return store
}
