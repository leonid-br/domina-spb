import { NavLink } from 'react-router-dom';
import { scrollTo } from 'utils/scrollTo';

const ScrollToButton = ({ toId, toRef, duration, children }) => {
    const handleClick = () =>
        scrollTo({ id: toId, ref: toRef, duration });

    return (
        <NavLink to="" onClick={handleClick}>
            {children}
        </NavLink>
    );
};

export default ScrollToButton;
