import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import actions from 'redux/language/language-action';

import { Switch } from 'react-switch-input';
import { getLanguage } from 'redux/language/language-selectors';

import logo from './logo.webp';

import s from './Header.module.css';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { language } = useSelector(getLanguage);

    const handleChange = e => {
        dispatch(actions.changeLanguage(!e.target.checked));
    };

    const handleClick = () => {
        navigate('/');
    };

    return (
        <header>
            <img
                src={logo}
                alt="logo"
                className={s.logo}
                onClick={handleClick}
            />
            {location.pathname === '/basket' ? (
                ''
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
