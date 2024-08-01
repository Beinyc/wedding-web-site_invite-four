import React, { useState, useEffect, useRef } from 'react';
import './Menu.css';

export default function Menu() {
    const [isVisible, setIsVisible] = useState({
        title1: false,
        paragraph1: false,
        title2: false,
        paragraph2: false,
        title3: false,
        paragraph3: false,
        title4: false,
        paragraph4: false,
        paragraph5: false,
        button: false,
    });

    const refs = {
        title1: useRef(null),
        paragraph1: useRef(null),
        title2: useRef(null),
        paragraph2: useRef(null),
        title3: useRef(null),
        paragraph3: useRef(null),
        title4: useRef(null),
        paragraph4: useRef(null),
        paragraph5: useRef(null),
        button: useRef(null),
    };

    const handleScroll = () => {
        Object.keys(refs).forEach((key) => {
            const ref = refs[key];
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setIsVisible((prev) => ({ ...prev, [key]: true }));
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run the handler to set initial state based on current scroll position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='menu'>
            <div className='menu__width'>
                <h3 ref={refs.title1} className={`menu__title ${isVisible.title1 ? 'visible' : ''}`}>МЕНЮ</h3>
                <p ref={refs.paragraph1} className={`menu__paragraph ${isVisible.paragraph1 ? 'visible' : ''}`}>
                    Меню разнообразно, поэтому сообщите нам заранее, если у вас есть какие-либо предпочтения или диетические ограничения. После подтверждения вы сможете пройти опрос о своих вкусовых предпочтениях и напитках.
                </p>
                <h3 ref={refs.title2} className={`menu__title ${isVisible.title2 ? 'visible' : ''}`}>ПОЖЕЛАНИЯ ПО ПОДАРКАМ</h3>
                <p ref={refs.paragraph2} className={`menu__paragraph ${isVisible.paragraph2 ? 'visible' : ''}`}>
                    Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас!
                </p>
                <h3 ref={refs.title3} className={`menu__title ${isVisible.title3 ? 'visible' : ''}`}>ПОДТВРЕЖДЕНИЕ</h3>
                <p ref={refs.paragraph3} className={`menu__paragraph ${isVisible.paragraph3 ? 'visible' : ''}`}>
                    Пожалуйста подтвердите свое присутствие до 15.11.2024
                </p>
                <h3 ref={refs.title4} className={`menu__title ${isVisible.title4 ? 'visible' : ''}`}>ФОТО</h3>
                <p ref={refs.paragraph4} className={`menu__paragraph ${isVisible.paragraph4 ? 'visible' : ''}`}>
                    Опубликуйте фото дня нашей свадьбы в соц.сетях с хештегом #
                </p>
                <p ref={refs.paragraph5} className={`menu__paragraph ${isVisible.paragraph5 ? 'visible' : ''}`}>
                    Ждем Вас на свадьбе!
                </p>
                <button ref={refs.button} className={`menu__button ${isVisible.button ? 'visible' : ''}`}>Подтвредить</button>
            </div>
        </div>
    );
}
