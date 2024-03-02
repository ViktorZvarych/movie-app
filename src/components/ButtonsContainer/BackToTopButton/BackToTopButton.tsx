import {FC, useEffect, useRef, useState} from "react";

import css from './BackToTopButton.module.css';

const BackToTopButton: FC = () => {
    console.log('render BackToTopButton');
    const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

    useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        });
    }, [position]);

    const [visibility, setVisibility] = useState<boolean>(false);
    const scrollTop = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTop.current) {
                window.scrollY > 200
                    ? (scrollTop.current.style.display = 'inline-block')
                    : (scrollTop.current.style.display = 'none');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <span onClick={() => setPosition({ top: 0, left: 0 })} className={css.circle} ref={scrollTop}>
                To top
            </span>
        </>
    );
};

export { BackToTopButton };