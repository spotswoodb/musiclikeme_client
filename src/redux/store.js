import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(thunk));
