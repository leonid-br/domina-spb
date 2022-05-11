import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';

import s from './Navigation.module.css';
import { getLanguage } from 'redux/language/language-selectors.js';

const Navigation = () => {
    const [activeClass, setActiveClass] = useState('');
    const { language } = useSelector(getLanguage);

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
                    // onClick={getActiveMenu}
                >
                    <Link
                        to="breakfast"
                        id="breakfast"
                        containerId="containerElement"
                        spy={true}
                        smooth={true}
                        duration={250}
                        onClick={getActiveMenu}
                    >
                        {language ? 'Завтраки' : 'Breakfast'}
                    </Link>
                </div>

                <div
                    className={
                        activeClass === 'saladsAndSnacks'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    // onClick={getActiveMenu}
                >
                    <Link
                        to="saladsAndSnacks"
                        id="saladsAndSnacks"
                        containerId="containerElement"
                        spy={true}
                        smooth={true}
                        duration={250}
                        onClick={getActiveMenu}
                    >
                        {language
                            ? 'Салаты и закуски'
                            : 'Salads and Snacks'}
                    </Link>
                </div>

                <div
                    className={
                        activeClass === 'soups'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    // onClick={getActiveMenu}
                >
                    <Link
                        to="soups"
                        id="soups"
                        containerId="containerElement"
                        spy={true}
                        smooth={true}
                        duration={250}
                        onClick={getActiveMenu}
                    >
                        {language ? 'Супы' : 'Soups'}
                    </Link>
                </div>

                <div
                    className={
                        activeClass === 'burgers'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    // onClick={getActiveMenu}
                >
                    <Link
                        to="burgers"
                        id="burgers"
                        containerId="containerElement"
                        spy={true}
                        smooth={true}
                        duration={250}
                        onClick={getActiveMenu}
                    >
                        {language
                            ? 'Бургеры и сэндвичи'
                            : 'Bourgers and Sandwiches'}
                    </Link>
                </div>

                <div
                    className={
                        activeClass === 'maindishes'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    // onClick={getActiveMenu}
                >
                    <Link
                        to="maindishes"
                        id="maindishes"
                        containerId="containerElement"
                        spy={true}
                        smooth={true}
                        duration={250}
                        onClick={getActiveMenu}
                    >
                        {language ? 'Горячие блюда' : 'Main Dishes'}
                    </Link>
                </div>

                <div
                    className={
                        activeClass === 'desserts'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    // onClick={getActiveMenu}
                >
                    <Link
                        to="desserts"
                        id="desserts"
                        containerId="containerElement"
                        spy={true}
                        smooth={true}
                        duration={250}
                        onClick={getActiveMenu}
                    >
                        {language ? 'Десерты' : 'Desserts'}
                    </Link>
                </div>

                <div
                    className={
                        activeClass === 'drinks'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={getActiveMenu}
                >
                    <Link
                        to="drinks"
                        id="drinks"
                        containerId="containerElement"
                        spy={true}
                        smooth={true}
                        duration={250}
                        onClick={getActiveMenu}
                    >
                        {language ? 'Напитки' : 'Drinks'}
                    </Link>
                </div>
            </Slider>
        </nav>
    );
};

export default Navigation;
