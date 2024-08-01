import React, { useState, useEffect } from 'react';
import "./Header.css";

import backgroundImage from '../../images/white.jpg';

export default function Header(props) {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-26T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`header ${isVisible ? 'header--visible' : ''}`}>
      <div className='header__width'>
        <h1 className='header__title'>
          Август <span>&</span>
          <br />
          Маргарита
        </h1>
        <p className='header__paragraph-up'>Приглашаем<br />на свадьбу</p>
        <p className='header__paragraph'>26 декабря</p>
        <p className='header__paragraph-down'>2024 года</p>
        <div className="header__timer">
          <div className="header-timer-segment">
            <span className="header-timer-number">{timeLeft.days || '0'}</span>
            <span className="header-timer-label">Дней</span>
          </div>
          <div className="header-timer-segment">
            <span className="header-timer-number">{timeLeft.hours || '0'}</span>
            <span className="header-timer-label">Часов</span>
          </div>
          <div className="header-timer-segment">
            <span className="header-timer-number">{timeLeft.minutes || '0'}</span>
            <span className="header-timer-label">Минут</span>
          </div>
          <div className="header-timer-segment">
            <span className="header-timer-number">{timeLeft.seconds || '0'}</span>
            <span className="header-timer-label">Секунд</span>
          </div>
        </div>
      </div>
    </div>
  );
}
