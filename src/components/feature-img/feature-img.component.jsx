import React from 'react';

import './feature-img.styles.scss';
import feature from '../../images/feature.jpg';

const FeatureImg = () => (
    <div className="feature-img">
        <img src={feature} alt="feature-image" className='feature-picture' />
    </div>
);

export default FeatureImg;