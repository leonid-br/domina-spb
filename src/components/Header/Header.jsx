import { useDispatch, useSelector } from 'react-redux';

import actions from 'redux/language/language-action';
import { getBasket } from 'redux/basket/basket-actions';

import { Switch } from 'react-switch-input';
import { getLanguage } from 'redux/language/language-selectors';
import { getBasketState } from 'redux/basket/basket-selectors';

import logo from './logo.jpg';

import s from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const { language } = useSelector(getLanguage);
    const { basket } = useSelector(getBasketState);

    const handleChange = e => {
        dispatch(actions.changeLanguage(!e.target.checked));
    };

    const handleClick = () => {
        dispatch(getBasket(false));
    };

    return (
        <header>
            <img
                src={logo}
                alt="logo"
                className={s.logo}
                onClick={handleClick}
            />

            {basket === true ? (
                <svg
                    width="20"
                    height="40"
                    viewBox="0 0 459 459"
                    fill="#c5a46d"
                    className={s.back}
                    onClick={handleClick}
                >
                    <g>
                        <g>
                            <path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z" />
                        </g>
                    </g>
                </svg>
            ) : (
                <>
                    <span>ru</span>
                    <Switch
                        onChange={handleChange}
                        language={language}
                    />
                    <span className={s.en}>en</span>
                </>
            )}
        </header>
    );
};

export default Header;
