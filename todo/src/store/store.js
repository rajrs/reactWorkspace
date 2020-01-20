import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducer'
import thunk from 'redux-thunk'
const store = createStore()
createStore(todoApp,  applyMiddleware(thunk))
export default store