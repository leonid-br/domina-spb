import s from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div>
                <p className={s.logo}>здесь будет лого</p>
            </div>
        </header>
    );
};

export default Header;
