import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import DetailsReducers from './detail';

const store = createStore(
                  combineReducers({
                                    DetailsReducers,
                                 }),{},(applyMiddleware(thunk))
);

store.subscribe(() => console.log("store",store.getState())) ;


export default store ;

