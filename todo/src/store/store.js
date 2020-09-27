import { createStore, applyMiddleware } from 'redux'
import todoReducer from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const store = createStore(todoReducer,  applyMiddleware(thunk,logger))
export default store