import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './language/language-reducer';


const store = configureStore({
    reducer: {
        language: languageReducer,
        // news: newsReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
