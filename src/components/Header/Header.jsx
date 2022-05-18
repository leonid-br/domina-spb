import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import s from './Header.module.css';
import logo from './logo.webp';
import { Switch } from 'react-switch-input';
import actions from 'redux/language/language-action';
import { getLanguage } from 'redux/language/language-selectors';

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { language } = useSelector(getLanguage);

    const handleChange = e => {
        dispatch(actions.changeLanguage(!e.target.checked));
    };

    return (
        <header>
            <img src={logo} alt="logo" className={s.logo} />
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
