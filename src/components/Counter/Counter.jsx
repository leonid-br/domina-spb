import { useDispatch } from 'react-redux';

import getAmmount from 'utils/getAmmountDish';
import actions from 'redux/order/order-actions';

export default function Counter({ el, order }) {
    const dispatch = useDispatch();

    return (
        <div>
            <span onClick={() => dispatch(actions.deleteDish(el.id))}>
                -
            </span>
            {getAmmount(el.id, order)}
            <span onClick={() => dispatch(actions.addDish(el))}>
                +
            </span>
        </div>
    );
}
