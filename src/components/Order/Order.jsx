import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getOrder } from 'redux/order/order-selectors';
import { getLanguage } from 'redux/language/language-selectors';

import s from './Order.module.css';

export default function Order() {
    const { order } = useSelector(getOrder);
    const { language } = useSelector(getLanguage);

    const navigate = useNavigate();

    const getSumOrder = () =>
        order.reduce((acc, cur) => acc + cur.price * cur.ammount, 0);

    const sum = String(getSumOrder(order)).replace(
        /(\d)(?=(\d\d\d)+([^\d]|$))/g,
        '$1 ',
    );

    const countDishes = order.reduce(
        (acc, cur) => acc + cur.ammount,
        0,
    );
    const handleClick = () => {
        navigate('/basket');
    };
    return (
        <>
            <div className={s.orderBlock} onClick={handleClick}>
                <span>{language ? 'Ваш заказ' : 'Your order'}</span>
                <span className={s.sum}> {countDishes}</span>
                <span> {sum}р.</span>
            </div>
        </>
    );
}
