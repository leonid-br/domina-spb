import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './order-actions';

const order = createReducer([], {
    [actions.addDish]: (state, { payload }) => {
        if (state.length === 0) {
            return [{ ...payload, ammount: 1 }];
        } else {
            const foundDish = state.find(el => el.id === payload.id);
            let newOrder = null;
            if (foundDish) {
                newOrder = state.map(el =>
                    el.id === payload.id
                        ? { ...el, ammount: el.ammount + 1 }
                        : el,
                );
                return newOrder;
            } else {
                return [...state, { ...payload, ammount: 1 }];
            }
        }
    },
    [actions.deleteDish]: (state, { payload }) => {
        const foundDish = state.find(el => el.id === payload.id);
        if (foundDish.ammount > 1) {
            const newOrder = state.map(el =>
                el.id === payload.id
                    ? { ...el, ammount: el.ammount - 1 }
                    : el,
            );
            return newOrder;
        } else {
            return [...state.filter(el => el.id !== payload.id)];
        }
    },
    [actions.deletePosition]: (state, { payload }) => [
        ...state.filter(el => el.id !== payload),
    ],
    [actions.clearOrder]: (__, _) => [],
});

export default combineReducers({ order });
