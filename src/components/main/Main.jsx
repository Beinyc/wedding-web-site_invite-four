import React, { useState, useEffect, useRef } from 'react';
import './Main.css';

import borderImage from '../../images/123434.jpg'
import pariImage from '../../images/main__pair.jpg';

export default function Main() {
    const [isVisible, setIsVisible] = useState({
        title: false,
        paragraph: false,
        pairImage: false,
        pairParagraph: false,
        groomImage: false,
        brideImage: false,
    });

    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const pairImageRef = useRef(null);
    const pairParagraphRef = useRef(null);
    const groomImageRef = useRef(null);
    const brideImageRef = useRef(null);

    const handleScroll = () => {
        const refs = [
            { ref: titleRef, key: 'title' },
            { ref: paragraphRef, key: 'paragraph' },
            { ref: pairImageRef, key: 'pairImage' },
            { ref: pairParagraphRef, key: 'pairParagraph' },
            { ref: groomImageRef, key: 'groomImage' },
            { ref: brideImageRef, key: 'brideImage' },
        ];

        refs.forEach(({ ref, key }) => {
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
        <div className='main'>
            <div className='main__width'>
                <h2 ref={titleRef} className={`main__title ${isVisible.title ? 'visible' : ''}`}>Дорогой<br /> гость!</h2>
                <p ref={paragraphRef} className={`main__paragraph ${isVisible.paragraph ? 'visible' : ''}`}>
                    Мы рады сообщить Вам, что 26.12.2024 состоится самое главное торжество в нашей жизни - день нашей свадьбы!
                    <br />
                    Приглашаем Вас разделить с нами радость этого незабываемого дня.
                    <br />
                    </p>
                    <span ref={paragraphRef} className={`main__span ${isVisible.paragraph ? 'visible' : ''}`}>26.12.2024 в 16:00 </span>
                    <p ref={paragraphRef} className={`main__paragraph ${isVisible.paragraph ? 'visible' : ''}`}>
                    Дворец бракосочетания №1
                    <br />
                    Центральня, 55
                </p>
                <img ref={pairImageRef} className={`main__image-pair ${isVisible.pairImage ? 'visible' : ''}`} src={pariImage} alt="фото пары" />
                <p ref={pairParagraphRef} className={`main__paragraph-pair ${isVisible.pairParagraph ? 'visible' : ''}`}>Ждем вас, ваши Август и Маргарита</p>
                {/* <div className='main__cart-flex'>
                    <div className='main__cart'>
                        <img ref={groomImageRef} className={`main__image-people ${isVisible.groomImage ? 'visible' : ''}`} src={groomImage} alt="фото жениха" />
                        <p className={`main__paragraph-people ${isVisible.groomImage ? 'visible' : ''}`}>Жених</p>
                    </div>
                    <div>
                        <img ref={brideImageRef} className={`main__image-people ${isVisible.brideImage ? 'visible' : ''}`} src={brideImage} alt="фото невесты" />
                        <p className={`main__paragraph-people ${isVisible.brideImage ? 'visible' : ''}`}>Невеста</p>
                    </div>
                </div> */}
                <button className='main__button'>Подтвредить</button>
            </div>
        </div>
    );
}
