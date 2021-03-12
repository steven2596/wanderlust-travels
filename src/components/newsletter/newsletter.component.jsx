import React from 'react';
import Button from '../button/button';

import './newsletter.styles.scss';

const Newsletter = () => (
    <div className="newsletter">
        <h2 className="newsletter__header">
            Sign up for our <span>newsletter</span>
        </h2>
        <p className="newsletter__text">
            Sign up now! We'll send you best offers and tips
            for your next trip.
        </p>
        <form action="#" className="newsletter__form">
            <input type="text" className="newsletter__input" placeholder="Your Email Address" />
            <Button>Submit</Button>
        </form>

    </div>
);

export default Newsletter;
