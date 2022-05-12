import Dish from 'components/Dish/index.js';
import './menuStyle.css';

export default function Сhapter({ title, data }) {
    return (
        <>
            <h2 className="menu-title">{title}</h2>
            <ul className="menu-list">
                {data.map(el => (
                    <li key={el.id} className="menu-item">
                        <Dish data={el} />
                    </li>
                ))}
            </ul>
        </>
    );
}
