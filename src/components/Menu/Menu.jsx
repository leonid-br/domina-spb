import { useSelector } from 'react-redux';

import data from 'components/Chapter/data';

import Section from 'components/Section';
import Сhapter from 'components/Chapter/Сhapter';

import { getLanguage } from 'redux/language/language-selectors.js';

import s from './Menu.module.css';

export default function Menu() {
    const { language } = useSelector(getLanguage);

    return (
        <div name="dishes" id="containerElement" className={s.dishes}>
            {language
                ? Object.keys(data.ru).map((dataSection, idx) => (
                      <Section id={data.name[idx]} key={data.id[idx]}>
                          <Сhapter
                              title={dataSection}
                              data={data.ru[dataSection]}
                              flag={data.name[idx]}
                          />
                      </Section>
                  ))
                : Object.keys(data.en).map((dataSection, idx) => (
                      <Section id={data.name[idx]} key={data.id[idx]}>
                          <Сhapter
                              title={dataSection}
                              data={data.en[dataSection]}
                              flag={data.name[idx]}
                          />
                      </Section>
                  ))}
        </div>
    );
}
