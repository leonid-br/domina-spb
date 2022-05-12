import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-scroll';
import ScrollToButton from 'components/ScrollToButton';

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

    const getActiveMenu = id => {
        setActiveClass(id);
        console.log('Navigation ~ e.target.id', id);
    };

    return (
        <nav>
            <Slider {...settings}>
                {/* <div
                    className={
                        activeClass === 'breakfast'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
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
                </div> */}

                <div
                    className={
                        activeClass === 'breakfast'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={() => getActiveMenu('breakfast')}
                >
                    <ScrollToButton
                        toId="breakfast"
                        onClick={getActiveMenu}
                    >
                        {language ? 'Завтраки' : 'Breakfast'}
                    </ScrollToButton>
                </div>

                <div
                    className={
                        activeClass === 'saladsAndSnacks'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={() => getActiveMenu('saladsAndSnacks')}
                >
                    <ScrollToButton toId="saladsAndSnacks">
                        {language
                            ? 'Салаты и закуски'
                            : 'Salads and Snacks'}{' '}
                    </ScrollToButton>
                </div>

                <div
                    className={
                        activeClass === 'soups'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={() => getActiveMenu('soups')}
                >
                    <ScrollToButton toId="soups">
                        {language ? 'Супы' : 'Soups'}{' '}
                    </ScrollToButton>
                </div>

                <div
                    className={
                        activeClass === 'burgers'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={() => getActiveMenu('burgers')}
                >
                    <ScrollToButton toId="burgers">
                        {language
                            ? 'Бургеры и сэндвичи'
                            : 'Bourgers and Sandwiches'}
                    </ScrollToButton>
                </div>

                <div
                    className={
                        activeClass === 'maindishes'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={() => getActiveMenu('maindishes')}
                >
                    <ScrollToButton toId="maindishes">
                        {language ? 'Горячие блюда' : 'Main Dishes'}
                    </ScrollToButton>
                </div>

                <div
                    className={
                        activeClass === 'desserts'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={() => getActiveMenu('desserts')}
                >
                    <ScrollToButton toId="desserts">
                        {language ? 'Десерты' : 'Desserts'}{' '}
                    </ScrollToButton>
                </div>

                <div
                    className={
                        activeClass === 'drinks'
                            ? `${s.item} ${s.activeLink}`
                            : `${s.item}`
                    }
                    onClick={() => getActiveMenu('drinks')}
                >
                    <ScrollToButton toId="drinks">
                        {language ? 'Напитки' : 'Drinks'}
                    </ScrollToButton>
                </div>
            </Slider>
        </nav>
    );
};

export default Navigation;
