// import { Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import Navigation from './Navigation';
import Menu from './Menu';
import Order from './Order';
import Basket from './Basket';
import ScrollToTop from 'utils/ScrollToTop';

import { getOrder } from 'redux/order/order-selectors';
import { getLanguage } from 'redux/language/language-selectors';
import { getBasketState } from 'redux/basket/basket-selectors';

import s from './App.module.css';

function App() {
    const { order } = useSelector(getOrder);
    const { language } = useSelector(getLanguage);
    const { basket } = useSelector(getBasketState);

    useEffect(() => {
        if (language) {
            document.title =
                'Room service меню, Domina St.Petersburg';
        } else {
            document.title =
                'Room service menu, Domina St.Petersburg';
        }
    }, [language]);

    return (
        <div className={s.app}>
            <div className={s.title}>
                <Header />
                {basket === true ? '' : <Navigation />}
            </div>

            <Suspense fallback={<h2>Loading...</h2>}>
                <ScrollToTop>
                    {basket ? <Basket /> : <Menu />}
                </ScrollToTop>
            </Suspense>

            {order.length !== 0 && basket === false ? <Order /> : ''}
        </div>
    );
}

export default App;
