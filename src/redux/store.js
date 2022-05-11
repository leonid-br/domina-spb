import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './language/language-reducer';
import orderReducer from './order/order-reducer';

const store = configureStore({
    reducer: {
        language: languageReducer,
        order: orderReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
