import { useSelector } from 'react-redux';

import { getLanguage } from 'redux/language/language-selectors';
import { getOrder } from 'redux/order/order-selectors';

import s from './Basket.module.css';
import test from 'images/1.jpg';

export default function Basket() {
    const language = useSelector(getLanguage);
    const { order } = useSelector(getOrder);
    console.log('Basket ~ order', order);

    const getAmmount = () => {};

    return (
        <div className={s.basket}>
            <h3 className={s.title}>
                {language ? 'Ваш заказ' : 'Your order'}
            </h3>
            <ul>
                {order &&
                    order.map((el, idx) => (
                        <li key={el.id} className={s.item}>
                            <div>
                                <img
                                    src={
                                        ''
                                            ? `https://image.tmdb.org/t/p/w500`
                                            : `${test}`
                                    }
                                    alt={el.name}
                                    className={s.img}
                                />
                            </div>
                            <div className={s.description}>
                                <p className={s.name}>{el.name}</p>
                                <div className={s.info}>
                                    <div>count</div>
                                    <div>ammount</div>
                                    <div>delete</div>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
