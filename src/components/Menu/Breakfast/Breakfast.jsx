import { useState } from 'react';

import data from './data.js';
import Dish from 'components/Dish/index.js';
import '../style.css';

export default function Breakfast() {
    const [language, setLanguage] = useState(true);

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
