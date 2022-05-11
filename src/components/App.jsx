import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Navigation from './Navigation';
import Section from 'components/Menu/Section';
import Order from './Order';
import { getLanguage } from 'redux/language/language-selectors.js';
import { getOrder } from 'redux/order/order-selectors';
// import Breakfast from './Menu/Breakfast';
// import SaladsAndSnacks from './Menu/SaladsAndSnacks';
// import Soups from './Menu/Soups';
// import Burgers from './Menu/Burgers';
// import MainDishes from './Menu/MainDishes';
// import Desserts from './Menu/Desserts';
// import Drinks from './Menu/Drinks';
import s from './App.module.css';

import { Element } from 'react-scroll';
import data from './Menu/data';

function App() {
    const { language } = useSelector(getLanguage);
    const { order } = useSelector(getOrder);

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
            <div
                name="dishes"
                id="containerElement"
                className={s.dishes}
            >
                {language
                    ? Object.keys(data.ru).map(
                          (dataSection, idx) => (
                              <Element
                                  name={data.name[idx]}
                                  key={dataSection}
                              >
                                  <Section
                                      title={dataSection}
                                      data={data.ru[dataSection]}
                                  />
                              </Element>
                          ),
                          //   console.log(data.name[idx]),
                      )
                    : Object.keys(data.en).map(
                          (dataSection, idx) => (
                              <Element
                                  name={data.name[idx]}
                                  key={dataSection}
                              >
                                  <Section
                                      title={dataSection}
                                      data={data.en[dataSection]}
                                  />
                              </Element>
                          ),
                          //   console.log(data.name[idx]),
                      )}
                {/* <Breakfast />
                <SaladsAndSnacks /> */}
                {/* <Element name="soups">
                    <Soups />
                </Element>
                <Element name="burgers">
                    <Burgers />
                </Element> */}
                {/* <MainDishes />
                <Desserts />
                <Drinks /> */}
            </div>
            {order && <Order />}
        </div>
    );
}

export default App;
