import { useSelector, useDispatch } from 'react-redux';

import Counter from 'components/Counter';
import getUniqOrder from 'utils/getUniqOrder';
import getAmmount from 'utils/getAmmountDish';
import { getLanguage } from 'redux/language/language-selectors';
import { getOrder } from 'redux/order/order-selectors';
import actions from 'redux/order/order-actions';

import s from './Basket.module.css';
import test from 'images/1.jpg';

export default function Basket() {
    const { language } = useSelector(getLanguage);
    const { order } = useSelector(getOrder);
    const dispatch = useDispatch();

    const getTotalAmmountOrder = () =>
        order.reduce((acc, cur) => (acc = acc + cur.price), 0);
    return (
        <div className={s.basket}>
            <h3 className={s.title}>
                {language ? 'Ваш заказ' : 'Your order'}
            </h3>
            <ul>
                {order &&
                    getUniqOrder(order, 'id').map((el, idx) => (
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
                                    <Counter el={el} order={order} />
                                    <div>
                                        {getAmmount(el.id, order) *
                                            el.price}
                                    </div>
                                    <div
                                        onClick={() =>
                                            dispatch(
                                                actions.deletePosition(
                                                    el.id,
                                                ),
                                            )
                                        }
                                    >
                                        delete
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
            {order.length !== 0 ? (
                <p>
                    {language ? 'Сумма заказа' : 'Total ammount'}:
                    {getTotalAmmountOrder()}
                </p>
            ) : (
                ''
            )}
        </div>
    );
}
