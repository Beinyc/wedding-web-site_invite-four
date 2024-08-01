import React from 'react';
import './company.css'

import companyImage from '../../images/company.jpg'

export default function Company() {
    return (
        <div className='company'>
            <img className='company__image' src={companyImage} alt="логотип компании" />
            <p className='company__paragraph'>WEDDING_AP</p>
        </div>
    );
};