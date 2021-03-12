import React from 'react';

import './package-card.styles.scss';




const PackageCard = ({ type, days, destinations, price, image }) => (
    <div className="card">
        <div className={`card__image card1 ${image === 'card2' ? 'card2' : ''} ${image === 'card3' ? 'card3' : ''} `}></div>
        <h2>Package {type}</h2>
        <ul>
            <li>{days} days</li>
            <li>{destinations} destinations</li>
            <li>$ {price}</li>
        </ul>
    </div>
);

export default PackageCard;