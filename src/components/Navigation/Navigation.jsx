import { useState } from 'react';
import Slider from 'react-slick';

import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
    const [activeClass, setActiveClass] = useState('');

    const settings = {
        className: 'slider variable-width',
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        // slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        arrows: false,
    };

    const getActiveMenu = e => {
        setActiveClass(e.target.id);
    };

    return (
        <nav>
            <Slider {...settings}>
                <div
                    className={
                        activeClass === 'breakfast'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="/breakfast" id="breakfast">
                        Завтраки
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'saladsAndSnacks'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="/salads-snacks" id="saladsAndSnacks">
                        Салаты и закуски
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'soups'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="soups" id="soups">
                        Супы
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'burgers'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="burgers" id="burgers">
                        Бургеры и сэндвичи
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'maindishes'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="maindishes" id="maindishes">
                        Горячие блюда
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'desserts'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="desserts" id="desserts">
                        Десерты
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'drinks'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="drinks" id="drinks">
                        Напитки
                    </NavLink>
                </div>
            </Slider>
        </nav>
    );
};

export default Navigation;
