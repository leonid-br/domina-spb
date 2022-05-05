import { useState } from 'react';
import Slider from 'react-slick';

import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
    const [activeClass, setActiveClass] = useState('');

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;

        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: '8px',
                    height: '8px',
                    borderTop: '2px solid #c5a46d',
                    borderRight: '2px solid #c5a46d',
                    transform: 'rotate(45deg) translate(0, -50%)',
                    position: 'absolute',
                    top: '45%',
                    right: '-15px',
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,

                    width: '8px',
                    height: '8px',
                    borderTop: '2px solid #c5a46d',
                    borderRight: '2px solid #c5a46d',
                    transform: 'rotate(-135deg) translate(0, -50%)',
                    position: 'absolute',
                    top: '25%',
                    left: '-10px',
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        // className: 'slider variable-width',
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
