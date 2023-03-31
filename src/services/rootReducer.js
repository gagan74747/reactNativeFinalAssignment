import {createStore, combineReducers, applyMiddleware} from 'redux';
import {productsReducer} from './products/reducer';
import thunk from 'redux-thunk';
import {productDetailsReducer} from './productDetails/reducer';

const reducer = combineReducers({productsReducer, productDetailsReducer});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
