import React, { useState, useEffect, useRef } from "react";
import "./Schedule.css";

export default function Schedule() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    cards: Array(5).fill(false), // Array to handle multiple cards
  });

  const titleRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleScroll = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible((prev) => ({ ...prev, title: true }));
      }
    }

    cardRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible((prev) => {
            const newCards = [...prev.cards];
            newCards[index] = true;
            return { ...prev, cards: newCards };
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run the handler to set initial state based on current scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="schedule">
      <div className="schedule__width">
        <h4 ref={titleRef} className={`schedule__title ${isVisible.title ? 'visible' : ''}`}>Свадебное расписание</h4>
        <div ref={cardRefs[0]} className={`schedule__card-flex ${isVisible.cards[0] ? 'visible' : ''}`}>
          <p className="schedule__time">16:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Сбор гостей</p>
            <p className="schedule__paragraph-down">не забываем про дресс-код</p>
          </div>
        </div>
        <div ref={cardRefs[1]} className={`schedule__card-flex ${isVisible.cards[1] ? 'visible' : ''}`}>
          <p className="schedule__time">17:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Роспись</p>
            <p className="schedule__paragraph-down">ул. Центральная, 55</p>
          </div>
        </div>
        <div ref={cardRefs[2]} className={`schedule__card-flex ${isVisible.cards[2] ? 'visible' : ''}`}>
          <p className="schedule__time">18:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Свадебный банкет</p>
          </div>
        </div>
        <div ref={cardRefs[3]} className={`schedule__card-flex ${isVisible.cards[3] ? 'visible' : ''}`}>
          <p className="schedule__time">20:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Первый танец молодых</p>
          </div>
        </div>
        <div ref={cardRefs[4]} className={`schedule__card-flex ${isVisible.cards[4] ? 'visible' : ''}`}>
          <p className="schedule__time">22:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Фейерверк</p>
          </div>
        </div>
        <div className="schedule__map">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa739f21d0297e00fbee10804c9a3a16cb4d169836d0944c94043cb133ce794b9&amp;source=constructor"></iframe>
        </div>
      </div>
    </div>
  );
}
