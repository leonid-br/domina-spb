import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './language-action';

const language = createReducer(true, {
    [actions.changeLanguage]: (state, { payload }) =>
        (state = payload),
});

export default combineReducers({ language });
