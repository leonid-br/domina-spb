import test from 'images/1.jpg';
import s from './Dish.module.css';

export default function Dish({ data }) {
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
                        <button type="button" className={s.addDish}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
