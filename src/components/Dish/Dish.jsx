import patrik from './nonPhoto.jpg';
import s from './Dish.module.css';

export default function Dish({ data }) {
    return (
        <>
            <div className={s.item}>
                <img
                    src={
                        ''
                            ? `https://image.tmdb.org/t/p/w500`
                            : `${patrik}`
                    }
                    alt={data.name}
                    // width={100}
                    // height={100}
                />
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <span>{data.price}</span>
            </div>
        </>
    );
}
