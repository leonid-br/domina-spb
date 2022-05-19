import { useDispatch } from 'react-redux';

import SvgPlus from 'components/Svg/SvgPlus';
import SvgMinus from 'components/Svg/SvgMinus';

import getAmmount from 'utils/getAmmountDish';
import actions from 'redux/order/order-actions';

import s from './Counter.module.css';

export default function Counter({ el, order }) {
    const dispatch = useDispatch();

    return (
        <div className={s.counter}>
            <span
                onClick={() => dispatch(actions.deleteDish(el.id))}
                className={s.minus}
            >
                <SvgMinus />
            </span>
            {getAmmount(el.id, order)}
            <span
                onClick={() => dispatch(actions.addDish(el))}
                className={s.plus}
            >
                <SvgPlus />
            </span>
        </div>
    );
}
