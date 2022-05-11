import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './order-actions';

const order = createReducer('', {
    [actions.addDish]: (state, { payload }) => [...state, payload],
});

export default combineReducers({ order });
