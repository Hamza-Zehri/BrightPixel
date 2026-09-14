import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, delay = 0, className = '', style = {} }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s`, ...style }}
        >
            {children}
        </div>
    );
};

export default Reveal;