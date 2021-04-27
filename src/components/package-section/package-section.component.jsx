import React from 'react';
import Fade from 'react-reveal/Fade';
import './package-section.styles.scss';

import packageData from './package-section.data';
import PackageCard from '../package-card/package-card.component';

const PackageSection = () => (
    <div className="packages">
        <Fade bottom duration={1000} distance="5rem">
            <h2 className="packages__header">Featured Tours</h2>
        </Fade>
        <div className="packages__cards">
            {
                packageData.map(({ id, ...others }) => (
                    <Fade bottom duration={1000} distance="5rem" >
                        <PackageCard key={id} {...others} />
                    </Fade>
                ))
            }
        </div>
    </div>
);

export default PackageSection;

