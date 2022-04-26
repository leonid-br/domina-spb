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
        // slidesToShow: 1,
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
                    <NavLink to="/123" id="breakfast">
                        Завтраки
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'salats'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="" id="salats">
                        Салаты и закуски
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'soup'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="" id="soup">
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
                    <NavLink to="" id="burgers">
                        Бургеры и сэндвичи
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'maindish'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="" id="maindish">
                        Горячие блюда
                    </NavLink>
                </div>

                <div
                    className={
                        activeClass === 'deserts'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <NavLink to="" id="deserts">
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
                    <NavLink to="" id="drinks">
                        Напитки
                    </NavLink>
                </div>
            </Slider>
        </nav>
    );
};

export default Navigation;
