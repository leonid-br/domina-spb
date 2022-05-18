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

    // [actions.addDish]: (state, { payload }) => [
    //     ...state,
    //     { ...payload, ammount: 1 },
    // ],

    //     return state.length === 0
    //         ? [{ ...payload, ammount: 1 }]
    //         : state.reduce(
    //               (acc, cur) => {
    //                   if (cur.id !== payload.id) {
    //                       console.log(
    //                           'айди НЕ равны',
    //                           cur.id !== payload.id,
    //                       );
    //                       return [
    //                           ...state,
    //                           { ...payload, ammount: 1 },
    //                       ];
    //                   } else {
    //                       console.log(
    //                           'айди равны',
    //                           cur.id !== payload.id,
    //                       );
    //                       const newCur = { ...cur, ammount: 2 };
    //                       state;
    //                       return [...state, { ...cur, ammount: 2 }];
    //                   }
    //               },

    //               state,
    //           );
    // },
});

export default combineReducers({ order });
