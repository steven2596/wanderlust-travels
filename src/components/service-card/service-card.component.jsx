import React from 'react';

import './service-card.styles.scss';

import sprite from '../../assets/icons/sprite.svg';


const ServiceCard = ({ title, content, iconPath }) => {

    return (
        <div className="service-card">
            <svg className="service-card__icon" >
                <use href={sprite + iconPath} />
            </svg>
            <h4 className="service-card__header">{title}</h4>
            <p className="service-card__text">{content}</p>
        </div>
    )
};

export default ServiceCard;