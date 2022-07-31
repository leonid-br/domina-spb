import s from './Modal.module.css';

export default function Modal({ language, onClick }) {
    return (
        <div className={s.overlay}>
            <div className={s.overlayConent}>
                <p className={s.text}>
                    {language
                        ? 'Благодарим за заказ. В ближайшие 5 минут мы перезвоним Вам для его подтверждения.'
                        : 'Thank you for your order. We will call you back to confirm it within 5 minutes.'}
                </p>
                <button
                    type="button"
                    className={s.btn}
                    onClick={onClick}
                >
                    Ok
                </button>
            </div>
        </div>
    );
}
