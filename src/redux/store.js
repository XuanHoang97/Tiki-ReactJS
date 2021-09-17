import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers";
import mySaga from "./sagas";

const composeEnhancer = process.env.NODE_ENV !== 'production' && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
    }) : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(mySaga);

export default store