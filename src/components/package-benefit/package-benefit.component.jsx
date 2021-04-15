import React from 'react';

import './package-benefit.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const PackageBenefit = () => {
    return (
        <div className="benefits">
            <h1 className="benefits__heading">Package Benefits</h1>

            <section className="benefits__container">
                <div className="benefits__benefit">
                    <svg className="benefit__icon benefit__icon--1">
                        <use href={sprite + '#icon-compass'} />
                    </svg>
                    <div className="benefit__text">
                        <h4 className="benefit__heading">Top Tourist Destinations</h4>
                        <p className="benefit__content">
                            We provide as many choices as possible for you to experience truly amazing places in Switzerland.
                        </p>
                    </div>
                </div>

                <div className="benefits__benefit">
                    <svg className="benefit__icon benefit__icon--2">
                        <use href={sprite + '#icon-suitcase'} />
                    </svg>
                    <div className="benefit__text">
                        <h4 className="benefit__heading">Convenience</h4>
                        <p className="benefit__content">
                            Skip the endless queues and brain storming over planning a perfect trip. We take care of everything for you.
                        </p>
                    </div>
                </div>

                <div className="benefits__benefit">
                    <svg className="benefit__icon benefit__icon--3">
                        <use href={sprite + '#icon-dollar'} />
                    </svg>
                    <div className="benefit__text">
                        <h4 className="benefit__heading">Save More on Travel</h4>
                        <p className="benefit__content">
                            We have exclusive access to special travel fares. You save more by travelling with us.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default PackageBenefit;