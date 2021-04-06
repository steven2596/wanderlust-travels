import React from 'react';

import './about-featurebox.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const AboutFeatureBox = ({ feature, value }) => {
    const { icon, title, text } = feature;

    return (
        <div className={`main__feature ${value ? 'value__feature' : ''}`}>
            <svg className="feature__icon" >
                <use href={sprite + icon} />
            </svg>
            <h4 className="feature__heading">{title}</h4>
            <p className="feature__text">{text}</p>
        </div>
    )
};

export default AboutFeatureBox;