import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './language/language-reducer';
import orderReducer from './order/order-reducer';
import basketReducer from './basket/basket-reducer';

const store = configureStore({
    reducer: {
        language: languageReducer,
        order: orderReducer,
        basket: basketReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
