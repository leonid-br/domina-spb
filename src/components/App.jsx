import {
    Route,
    Routes,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import Navigation from './Navigation';
import Menu from './Menu';
import Order from './Order';
import Basket from './Basket';
import { getOrder } from 'redux/order/order-selectors';

import s from './App.module.css';

function App() {
    const { order } = useSelector(getOrder);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (order.length === 0) {
            navigate('/');
        }
    }, [navigate, order]);

    return (
        <div className={s.app}>
            <div className={s.title}>
                <Header />
                {location.pathname === '/basket' ? (
                    ''
                ) : (
                    <Navigation />
                )}
            </div>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/basket" element={<Basket />} />
                </Routes>
            </Suspense>
            {order.length !== 0 && location.pathname !== '/basket' ? (
                <Order />
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
