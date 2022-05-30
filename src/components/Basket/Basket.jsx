import { useState, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
// import regexp from 'regexp';

import Counter from 'components/Counter';
import SvgPlus from 'components/Svg/SvgPlus';

import getUniqOrder from 'utils/getUniqOrder';
import actions from 'redux/order/order-actions';

import { getLanguage } from 'redux/language/language-selectors';
import { getOrder } from 'redux/order/order-selectors';

import s from './Basket.module.css';
import test from 'images/1.jpg';
import api from '../../keys.js';

export default function Basket() {
    const [roomNumber, setRoomNumber] = useState('');
    const [comment, setComment] = useState('');
    const [modal, setModal] = useState(false);
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
        e.target.name === 'roomNumber'
            ? setRoomNumber(e.target.value)
            : setComment(e.target.value);
    };

    const handleClick = () => {
        setModal(false);
        dispatch(actions.clearOrder());
        setRoomNumber('');
        setComment('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        const reg = /\b([2-7][0-2][0-9])\b/gm;

        if (!reg.test(roomNumber)) {
            return toast.warn(
                language
                    ? 'Введён не коррекнтый номер комнаты'
                    : 'Invalid room number entered',
                {
                    position: 'top-center',
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                },
            );
        }

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
        setModal(true);
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
                                            {el.ammount * el.price}
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
                                    value={`${el.name} - ${el.ammount}`}
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
                        // min={100}
                        // max={718}
                        required
                    />
                </label>
                <span className={s.commentSpan}>
                    {language
                        ? 'Комментарий к заказу'
                        : 'Comment to the order'}
                </span>
                <textarea
                    name="comment"
                    className={s.commentText}
                    onChange={handleChange}
                    value={comment}
                />
                <div className={s.callBox}>
                    <span className={s.callText}>
                        {language
                            ? 'Связаться с сотрудником ресторанной службы'
                            : 'Contact a restaurant employee'}
                    </span>
                    <a href="tel:+79215924792">
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#c5a46d"
                            className={s.iconTel}
                        >
                            <path d="M13,8a3,3,0,0,1,3,3,1,1,0,0,0,2,0,5,5,0,0,0-5-5,1,1,0,0,0,0,2Z" />
                            <path d="M13,4a7,7,0,0,1,7,7,1,1,0,0,0,2,0,9,9,0,0,0-9-9,1,1,0,0,0,0,2Z" />
                            <path d="M21.75,15.91a1,1,0,0,0-.72-.65l-6-1.37a1,1,0,0,0-.92.26c-.14.13-.15.14-.8,1.38a9.91,9.91,0,0,1-4.87-4.89C9.71,10,9.72,10,9.85,9.85a1,1,0,0,0,.26-.92L8.74,3a1,1,0,0,0-.65-.72,3.79,3.79,0,0,0-.72-.18A3.94,3.94,0,0,0,6.6,2,4.6,4.6,0,0,0,2,6.6,15.42,15.42,0,0,0,17.4,22,4.6,4.6,0,0,0,22,17.4a4.77,4.77,0,0,0-.06-.76A4.34,4.34,0,0,0,21.75,15.91Z" />
                        </svg>
                    </a>
                </div>

                <button
                    type="submit"
                    className={s.btn}
                    disabled={!roomNumber}
                >
                    {language ? 'Отправить заказ' : 'Send your order'}
                </button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {modal ? (
                <div className={s.overlay}>
                    <div className={s.overlayConent}>
                        <p className={s.text}>
                            {language
                                ? 'Благодарим за заказ. В ближайшие 5 минут мы перезвоним Вам для его подтверждения.'
                                : 'Thank you for your order. In the next 5 minutes we will call you back to confirm it.'}
                        </p>
                        <button
                            type="button"
                            className={s.btn}
                            onClick={handleClick}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    ) : (
        ''
    );
}
