import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'components/Counter';

import actions from 'redux/order/order-actions';
import { getOrder } from 'redux/order/order-selectors';
import { getLanguage } from 'redux/language/language-selectors';

import SvgPlus from 'components/Svg/SvgPlus';
import PopUp from 'utils/PopUp';

import test from 'images/1.jpg';
import s from './Dish.module.css';

export default function Dish({ data, flag }) {
    const [openPhoto, setOpenPhoto] = useState(null);

    const dispatch = useDispatch();

    const { order } = useSelector(getOrder);
    const { language } = useSelector(getLanguage);

    const checkedDish = order.find(el => el.id === data.id);
    const addDefaultSrc = e => {
        e.target.src = test;
    };

    const toggleModal = () => {
        setOpenPhoto(!openPhoto);
    };

    return (
        <>
            <div className={s.item}>
                {flag === 'drinks' ? (
                    ''
                ) : (
                    <img
                        onError={addDefaultSrc}
                        src={`images/${data.id}.jpg`}
                        alt={data.name}
                        className={s.img}
                        onClick={() => toggleModal()}
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
                        <p className={s.price}>
                            {data.price} {language ? 'р.' : 'rub'}
                        </p>
                        {checkedDish ? (
                            <Counter el={checkedDish} />
                        ) : (
                            <span
                                className={s.plus}
                                onClick={() =>
                                    dispatch(actions.addDish(data))
                                }
                            >
                                <SvgPlus />
                            </span>
                        )}
                    </div>
                </div>
            </div>
            {openPhoto && <PopUp data={data} onClose={toggleModal} />}
        </>
    );
}
