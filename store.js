import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './combineReds'

const store=createStore(mainReducer,applyMiddleware(thunk))

export default store;