import { forwardRef } from 'react';

const Section = forwardRef(({ id, children }, ref) => (
    <section ref={ref} id={id}>
        {children}
    </section>
));

export default Section;
