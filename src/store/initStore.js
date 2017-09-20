import { createStore } from 'redux'
import rootReducer from '../reducers'
export default function initStore(defaultState){
    return createStore(rootReducer,defaultState);
}