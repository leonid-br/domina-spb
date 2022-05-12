import { forwardRef } from 'react';

const Section = forwardRef(({ id, title, children }, ref) => (
    <section ref={ref} id={id}>
        <h2>{title}</h2>
        {children}
    </section>
));

export default Section;
