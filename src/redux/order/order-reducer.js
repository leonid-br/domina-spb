import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './order-actions';

const order = createReducer([], {
    [actions.addDish]: (state, { payload }) => [...state, payload],
    [actions.deleteDish]: (state, { payload }) => {
        const idx = state.findIndex(el => el.id === payload);
        const newState = [...state];
        newState.splice(idx, 1);
        return [...newState];
    },
    [actions.deletePosition]: (state, { payload }) => [
        ...state.filter(el => el.id !== payload),
    ],
    [actions.clearOrder]: (__, _) => [],
});

export default combineReducers({ order });
