import React from 'react';
import Button from '../button/button';

import './custom-plan.styles.scss';

const CustomPlan = () => (
    <div className="custom-plan">
        <div className="custom-plan__content">
            <span className="custom-plan__line"></span>
            <h2 className="custom-plan__heading">Custom Plan</h2>
            <p className="custom-plan__text">
                All of our package tours are excellent. But if you have something
                in mind, drop us an email to make a custom plan which is tailored
                to your preferences and needs.
            </p>
            <Button>Contact Now</Button>
        </div>
        <div className="custom-plan__img">
            <div className="custom-plan__picture"></div>
            <div className="custom-plan__back"></div>
        </div>
    </div>
);

export default CustomPlan;