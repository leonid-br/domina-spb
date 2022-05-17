import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './order-actions';

const order = createReducer([], {
    // [actions.addDish]: (state, { payload }) => [...state, payload],
    [actions.addDish]: (state, { payload }) => {
        console.log(payload);
        return state.length === 0
            ? [{ ...payload, ammount: 1 }]
            : [
                  state.reduce(
                      (acc, cur) =>
                          cur.id !== payload.id
                              ? { ...acc, ...payload, ammonut: 1 }
                              : [
                                    ...state,
                                    { ...payload, ammount: 1 },
                                ],
                      state,
                  ),
              ];
    },
});

export default combineReducers({ order });
