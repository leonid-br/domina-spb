import { useDispatch } from 'react-redux';

import actions from 'redux/order/order-actions';

import test from 'images/1.jpg';
import s from './Dish.module.css';

export default function Dish({ data }) {
    const dispatch = useDispatch();
    return (
        <>
            <div className={s.item}>
                <img
                    src={
                        ''
                            ? `https://image.tmdb.org/t/p/w500`
                            : `${test}`
                    }
                    alt={data.name}
                    className={s.img}
                />
                <div className={s.description}>
                    <h3 className={s.title}>{data.name}</h3>
                    <p className={s.subtitle}>{data.description}</p>

                    <div className={s.box}>
                        <p className={s.price}>{data.price} p.</p>
                        <button
                            type="button"
                            className={s.addDish}
                            onClick={() =>
                                dispatch(actions.addDish(data))
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
