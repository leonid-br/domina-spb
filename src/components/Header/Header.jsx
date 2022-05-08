// import { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './Header.module.css';
import logo from './logo.webp';
import { Switch } from 'react-switch-input';
import actions from 'redux/language/language-action';

const Header = () => {
    // const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(actions.changeLanguage(!e.target.checked));
    };

    return (
        <header>
            <img src={logo} alt="logo" className={s.logo} />
            <span>ru</span>
            <Switch onChange={handleChange} />
            <span className={s.en}>en</span>
        </header>
    );
};

export default Header;
