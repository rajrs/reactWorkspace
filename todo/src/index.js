import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import {BrowserRouter, Router} from "react-router-dom";
import store from './store/store'
import {history} from './_helpers/history'
//store.dispatch({type:GET_TASKS })
//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
 ReactDOM.render( 
     <Provider store={store}>
         <Router  history={history}>
            <App />
         </Router>        
     </Provider>
   
     , document.getElementById('root'));


