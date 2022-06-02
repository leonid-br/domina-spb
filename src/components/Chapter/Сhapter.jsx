import { useSelector } from 'react-redux';

import { getLanguage } from 'redux/language/language-selectors.js';

import Dish from 'components/Dish/index.js';
import './menuStyle.css';

export default function Сhapter({ title, data, flag }) {
    const { language } = useSelector(getLanguage);
    return (
        <>
            <h2 className="menu-title">{title}</h2>
            {flag === 'breakfast' ? (
                <p className="breakfast">
                    {language
                        ? 'С 7.00 до 13.00 ежедневно.'
                        : 'From 7.00 to 13.00 daily.'}
                </p>
            ) : (
                ''
            )}

            <ul className="menu-list">
                {data.map(el => (
                    <li key={el.id} className="menu-item">
                        <Dish data={el} key={el.id} flag={flag} />
                    </li>
                ))}
            </ul>
        </>
    );
}
