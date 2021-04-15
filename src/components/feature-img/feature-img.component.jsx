import React from 'react';
import Fade from 'react-reveal/Fade';
import './feature-img.styles.scss';
import feature from '../../assets/images/feature.jpg';

const FeatureImg = () => (
    <Fade bottom duration={2000} >
        <div className="feature-img">
            <img src={feature} alt="feature-image" className='feature-picture' />
        </div>
    </Fade>
);

export default FeatureImg;