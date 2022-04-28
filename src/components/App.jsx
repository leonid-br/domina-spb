import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Breakfast from './Menu/Breakfast';
import SaladsAndSnacks from './Menu/SaladsAndSnacks';
import Soups from './Menu/Soups';
import Burgers from './Menu/Burgers';
import MainDishes from './Menu/MainDishes';
import Desserts from './Menu/Desserts';
import Drinks from './Menu/Drinks';
import s from './App.module.css';

function App() {
    return (
        <div className={s.app}>
            <Header />
            <Navigation />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route
                        path="/breakfast"
                        element={<Breakfast />}
                    />
                    <Route
                        path="/salads-snacks"
                        element={<SaladsAndSnacks />}
                    />
                    <Route path="/soups" element={<Soups />} />
                    <Route path="/burgers" element={<Burgers />} />
                    <Route
                        path="/maindishes"
                        element={<MainDishes />}
                    />
                    <Route path="/desserts" element={<Desserts />} />
                    <Route path="/drinks" element={<Drinks />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
