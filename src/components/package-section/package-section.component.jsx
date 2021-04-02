import React from 'react';

import './package-section.styles.scss';

import packageData from './package-section.data';
import PackageCard from '../package-card/package-card.component';

const PackageSection = () => (
    <div className="packages">
        <h2 className="packages__header">Package Tours</h2>
        <div className="packages__cards">
            {
                packageData.map(({ id, ...others }) => (
                    <PackageCard key={id} {...others} />
                ))
            }
        </div>
    </div>
);

export default PackageSection;

