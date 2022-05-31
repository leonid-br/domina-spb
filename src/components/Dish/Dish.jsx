import { useDispatch, useSelector } from 'react-redux';

import Counter from 'components/Counter';

import actions from 'redux/order/order-actions';
import { getOrder } from 'redux/order/order-selectors';

import test from 'images/1.jpg';
import s from './Dish.module.css';

export default function Dish({ data, id }) {
    const dispatch = useDispatch();
    const { order } = useSelector(getOrder);
    // console.log('id:', id);
    const checedDish = order.find(el => el.id === data.id);
    return (
        <>
            <div className={s.item}>
                {id === 'drinks' ? (
                    ''
                ) : (
                    <img
                        src={
                            ''
                                ? `https://image.tmdb.org/t/p/w500`
                                : `${test}`
                        }
                        alt={data.name}
                        className={s.img}
                    />
                )}
                <div className={s.description}>
                    <div>
                        <h3 className={s.title}>{data.name}</h3>
                        <p className={s.subtitle}>
                            {data.description}
                        </p>
                    </div>

                    <div className={s.box}>
                        <p className={s.price}>{data.price} p.</p>
                        {checedDish ? (
                            <Counter el={checedDish} />
                        ) : (
                            <button
                                type="button"
                                className={s.addDish}
                                onClick={() =>
                                    dispatch(actions.addDish(data))
                                }
                            >
                                +
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
