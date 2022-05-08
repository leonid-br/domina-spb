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

import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';

function App() {
    return (
        <div className={s.app}>
            <div className={s.title}>
                <Header />
                <Navigation />
            </div>
            {/* <Suspense fallback={<h2>Loading...</h2>}>
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
            </Suspense> */}
            <Breakfast />
            <SaladsAndSnacks />
            <Element name="soups">
                <Soups />
            </Element>
            <Burgers />
            <MainDishes />
            <Desserts />
            <Drinks />
        </div>
    );
}

export default App;
