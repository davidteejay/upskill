import { createStore, applyMiddleware, compose, } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import { createLogger } from 'redux-logger'

const log = createLogger({ diff: true, collapsed: true });

export default (initialState = {}) => {
    //middleware configuration
    // const middleware = { thunk, log };

    //store enhancers
    // const enhancers = []

    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        applyMiddleware(log),
        // other store enhancers if any
    );

    //store instantiation
    const store = createStore(
        makeRootReducer(),
        initialState,
        enhancer
    );

    return store;
}
