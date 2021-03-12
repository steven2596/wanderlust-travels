import React from 'react';

import './guide.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const Guide = () => (
    <div className="guide">
        <div className="guide__content">
            <svg className="guide__content-icon" >
                <use href={sprite + "#icon-cogs"} />
            </svg>
            <h4 className="guide__content-header">How It Works</h4>
            <p className="guide__content-text">
                Our mission is to offer a splendid experience to you. Everything we do is meticulously planned so that it will change the way you travel. No matter what you’d like to do, we’ll do our best to make it happen.
            </p>
        </div>



        <div className="guide__steps">
            <div className="guide__step">
                <figure className="guide__step-circle">c</figure>
                <span className="guide__step-number">01</span>
                <svg className="guide__step-icon" >
                    <use href={sprite + "#icon-phone"} />
                </svg>
                <h className="guide__step-header">Talk To Us</h>
                <p className="guide__step-text">
                    Pick up the phone or drop us an email. There’ll be someone at the other end ready to help.
                    Understanding is the key to our work and it sets us apart from the rest.
                </p>
            </div>
            <div className="guide__step">
                <figure className="guide__step-circle guide__step-circle--center">c</figure>
                <span className="guide__step-number">02</span>
                <svg className="guide__step-icon" >
                    <use href={sprite + "#icon-map"} />
                </svg>
                <h className="guide__step-header">Choose Trip Plan</h>
                <p className="guide__step-text">
                    Choose the tour package that you like. If you have something else in mind,
                    we’ll create a trip plan that’s tailored to your taste and needs. Customer’s satisfaction is our first priority.
                </p>
            </div>
            <div className="guide__step">
                <figure className="guide__step-circle" >c</figure>
                <span className="guide__step-number">03</span>
                <svg className="guide__step-icon" >
                    <use href={sprite + "#icon-book"} />
                </svg>
                <h className="guide__step-header">Book It</h>
                <p className="guide__step-text">
                    Once the trip plan is finalized and you’re happy with the plan, book it and leave the rest to us. Relax and look forward to the trip.
                    We will take care of everything to you.
                </p>
            </div>
        </div>


    </div>
);

export default Guide;