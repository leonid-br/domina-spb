import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getBasket } from './basket-actions';

const basket = createReducer(false, {
    [getBasket]: (state, { payload }) => (state = payload),
});

export default combineReducers({ basket });
