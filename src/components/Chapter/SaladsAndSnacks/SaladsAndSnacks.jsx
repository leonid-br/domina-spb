import { useSelector, useDispatch } from 'react-redux';

import data from './data.js';
import Dish from 'components/Dish/index.js';
import '../menuStyle.css';
import { getLanguage } from 'redux/language/language-selectors.js';

export default function SaladsAndSnacks() {
    const { language } = useSelector(getLanguage);

    return (
        <>
            <ul className="menu-list">
                {language
                    ? data.ru.map(el => (
                          <li key={el.id} className="menu-item">
                              <Dish data={el} />
                          </li>
                      ))
                    : data.en.map(el => (
                          <li key={el.id} className="menu-item">
                              <Dish data={el} />
                          </li>
                      ))}
            </ul>
        </>
    );
}
