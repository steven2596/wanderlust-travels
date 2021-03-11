import React from 'react';

import './service-section.styles.scss';
import serviceData from './service-section.data';
import ServiceCard from '../service-card/service-card.component';

const Service = () => (
    <div className="service">
        <h1 className="service__header">
            Reasons to choose wanderlust
        </h1>
        <p className="service__content">
            All of our tour packages are created so that you don’t have to worry about a thing from the beginning to the end of the trip. Luxury service begins the moment you contact us. All tour packages includes the following services.
        </p>
        {
            serviceData.map(({ id, ...others }) => (
                <ServiceCard key={id} {...others} />
            ))
        }
    </div>
);

export default Service;