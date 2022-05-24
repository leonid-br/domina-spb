import { useState, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser';
// import regexp from 'regexp';

import Counter from 'components/Counter';
import SvgPlus from 'components/Svg/SvgPlus';

import getUniqOrder from 'utils/getUniqOrder';
import getAmmount from 'utils/getAmmountDish';
import actions from 'redux/order/order-actions';

import { getLanguage } from 'redux/language/language-selectors';
import { getOrder } from 'redux/order/order-selectors';

import s from './Basket.module.css';
import test from 'images/1.jpg';
import api from '../../keys.js';

export default function Basket() {
    const [roomNumber, setRoomNumber] = useState('');
    const form = useRef();

    const { language } = useSelector(getLanguage);
    const { order } = useSelector(getOrder);

    const dispatch = useDispatch();

    const getTotalAmmountOrder = order =>
        order.reduce((acc, cur) => (acc = acc + cur.price), 0);

    const calculatedTotalAmmountOrder = useMemo(() => {
        return getTotalAmmountOrder(order);
    }, [order]);

    const handleChange = e => {
        // const regexp = '/(2[0-1][1-8])/gm';
        setRoomNumber(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                api.SERVICE_ID,
                api.TEMPLATE_ID,
                form.current,
                api.PUBLIC_KEY,
            )
            .then(
                result => {
                    console.log(form.current);
                },
                error => {
                    console.log(error.text);
                },
            );

        // dispatch(actions.clearOrder());
        // setRoomNumber('');
    };

    return order.length !== 0 ? (
        <div className={s.basket}>
            <h3 className={s.title}>
                {language ? 'Ваш заказ' : 'Your order'}
            </h3>
            <form
                className={s.form}
                onSubmit={handleSubmit}
                ref={form}
            >
                <ul className={s.list}>
                    {order &&
                        getUniqOrder(order, 'id').map((el, idx) => (
                            <li key={el.id} className={s.item}>
                                {/* Фото блюда */}
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
                                    <p className={s.name}>
                                        {el.name}
                                    </p>
                                    <div className={s.info}>
                                        {/* Счетчик количества блюда */}
                                        <Counter
                                            el={el}
                                            order={order}
                                        />

                                        {/* Сумма за блюдо */}
                                        <div>
                                            {getAmmount(
                                                el.id,
                                                order,
                                            ) * el.price}
                                            р.
                                        </div>

                                        {/* Удаление блюда */}
                                        <div
                                            onClick={() =>
                                                dispatch(
                                                    actions.deletePosition(
                                                        el.id,
                                                    ),
                                                )
                                            }
                                            className={s.delete}
                                        >
                                            <SvgPlus />
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="hidden"
                                    value={`${el.name} - 1`}
                                    name={idx}
                                />
                            </li>
                        ))}
                </ul>

                {/* Сумма заказа */}
                <p className={s.totalAmmount}>
                    {language ? 'Сумма заказа' : 'Total ammount'}:{' '}
                    {calculatedTotalAmmountOrder}p.
                </p>

                {/* Форма отправки */}

                <label htmlFor="roomNumber" className={s.label}>
                    {language ? 'Номер комнаты:' : 'Room number:'}
                    <input
                        name="roomNumber"
                        type="number"
                        value={roomNumber}
                        className={s.input}
                        onChange={handleChange}
                        min={100}
                        max={800}
                        required
                        pattern="/(2[0-1][1-8])/gm"
                    />
                </label>

                <button
                    type="submit"
                    className={s.btn}
                    disabled={!roomNumber}
                >
                    {language ? 'Отправить заказ' : 'Send your order'}
                </button>
            </form>
        </div>
    ) : (
        ''
    );
}
