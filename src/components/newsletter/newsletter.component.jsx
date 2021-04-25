import React from 'react';
import Button from '../button/button';
import Fade from 'react-reveal/Fade';

import './newsletter.styles.scss';

const Newsletter = () => (
    <Fade duration={1500} >
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
    </Fade>
);

export default Newsletter;
