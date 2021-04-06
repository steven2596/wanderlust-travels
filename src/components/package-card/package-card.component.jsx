import React from 'react';

import './package-card.styles.scss';

import Button from '../button/button';




const PackageCard = ({ type, days, destinations, price, image, routeName }) => {


    return (
        <div className="card">

            <div className={`card__image card1 ${image === 'card2' ? 'card2' : ''} ${image === 'card3' ? 'card3' : ''} `}></div>
            <div className="card__details">
                <h4 className="card__header" >Package {type}</h4>
                <ul className="card__list" >
                    <li className="card__item">{days} days</li>
                    <li className="card__item">{destinations} destinations</li>
                    <li className="card__item">Visa Fees</li>
                </ul>
                <span className="card__price">$ {price}</span>

                <Button small round route={`/tours${routeName}`}>View Details</Button>

            </div>
        </div>
    )
};

export default PackageCard;