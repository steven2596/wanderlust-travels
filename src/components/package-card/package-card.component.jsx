import React from 'react';

import './package-card.styles.scss';

import Button from '../button/button';


const PackageCard = ({ type, days, destinations, price, image }) => (
    <div className="card">

        <div className={`card__image card1 ${image === 'card2' ? 'card2' : ''} ${image === 'card3' ? 'card3' : ''} `}></div>
        <div className="card__details">
            <h4 className="card__header" >Package {type}</h4>
            <ul className="card__list" >
                <li className="card__item">{days} days</li>
                <li className="card__item">{destinations} destinations</li>
                <li className="card__item">Visa Application</li>
                <li className="card__item">Flight Ticket</li>
            </ul>
            <span className="card__price">$ {price}</span>
            <Button small >View details</Button>
        </div>
    </div>
);

export default PackageCard;