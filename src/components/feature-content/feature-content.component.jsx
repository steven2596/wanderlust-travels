import React from 'react';

import './feature-content.styles.scss';

import { ReactComponent as LeafIcon } from '../../assets/icons/leaf.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star-full.svg';
import { ReactComponent as TargetIcon } from '../../assets/icons/target.svg';
import { ReactComponent as StackIcon } from '../../assets/icons/stack.svg';

const FeatureContent = () => (
    <div className="feature-content">
        <div className="feature-content__heading">
            <span className="feature-content__heading-1">what to</span>
            <span className="feature-content__heading-2">expect</span>
        </div>
        <div className="feature-content__section">
            <div className="feature-content__textbox">
                <LeafIcon className='feature-content__icon' />
                <h4 className="feature-content__header">Simple and Convenient</h4>
                <p className="feature-content__text">
                    Travelling has never been this simple. Make beautiful memories of your lifetime.
                    With Wanderlust, use your precious time enjoying your trip instead of planning it.
                </p>
            </div>
            <div className="feature-content__textbox">
                <StarIcon className='feature-content__icon' />
                <h4 className="feature-content__header">Unforgettable Experiences</h4>
                <p className="feature-content__text">
                    We will do everything to make your trip unforgettable. Your trip will be filled with vivid impressions and fill you with energy.
                </p>
            </div>
            <div className="feature-content__textbox">
                <TargetIcon className='feature-content__icon' />
                <h4 className="feature-content__header">Personal  Approach</h4>
                <p className="feature-content__text">
                    Our expert team will provide you with premium services from the start to the end.
                </p>
            </div>
            <div className="feature-content__textbox">
                <StackIcon className='feature-content__icon' />
                <h4 className="feature-content__header">Whatever You Want</h4>
                <p className="feature-content__text">
                    Customer’s satisfaction is our first priority. Trip plan will be tailored to your needs.
                </p>
            </div>
        </div>
    </div>
);

export default FeatureContent;