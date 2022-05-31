import { useSelector } from 'react-redux';

import { getLanguage } from 'redux/language/language-selectors.js';

import Dish from 'components/Dish/index.js';
import './menuStyle.css';

export default function Сhapter({ title, data, breakfast, drinks }) {
    const { language } = useSelector(getLanguage);
    // console.log('id:', drinks);
    return (
        <>
            <h2 className="menu-title">{title}</h2>
            {breakfast === 'breakfast' ? (
                <p className="breakfast">
                    {language
                        ? 'Заказ блюд доступен с 7.00 до 13.00 ежедневно.'
                        : 'The order of dishes is available from 7.00 to 13.00 daily.'}
                </p>
            ) : (
                ''
            )}

            <ul className="menu-list">
                {data.map(el => (
                    <li key={el.id} className="menu-item">
                        <Dish data={el} key={el.id} id={drinks} />
                    </li>
                ))}
            </ul>
        </>
    );
}
