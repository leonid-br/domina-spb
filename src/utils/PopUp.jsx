import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const popUpRoot = document.querySelector('#modal-root');

const PopUp = ({ onClose, data }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const hadleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const handleBtnCloseClick = () => {
        onClose();
    };

    const PhotoModal = ({ hadleBackdropClick, data }) => {
        return (
            <div className="overlay" onClick={hadleBackdropClick}>
                <div className="popup">
                    <div className="closeBtn">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            onClick={handleBtnCloseClick}
                        >
                            <path
                                d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                                fill="#1C1B1F"
                            />
                        </svg>
                    </div>
                    <img
                        src={`images/${data.id}.jpg`}
                        alt={data.name}
                        className="popUpPhoto"
                    />
                </div>
            </div>
        );
    };

    return createPortal(
        <PhotoModal
            hadleBackdropClick={hadleBackdropClick}
            data={data}
        />,
        popUpRoot,
    );
};

export default PopUp;
