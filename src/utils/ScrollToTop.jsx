import { useEffect } from 'react';

const ScrollToTop = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.flag]);

    return <>{props.children}</>;
};

export default ScrollToTop;
