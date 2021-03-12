import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import CustomPlan from '../../components/custom-plan/custom-plan.component';
import FeatureImg from '../../components/feature-img/feature-img.component';
import FeatureContent from '../../components/feature-content/feature-content.component';

import Service from '../../components/service-section/service-section.component';
import Guide from '../../components/guide/guide.component';


const HomePage = () => (
    <div className="homepage">
        {/* <div className="component-1">Menu</div> */}
        <Header />
        <FeatureImg />
        <FeatureContent />
        <div className="component-5">Package tours</div>
        <CustomPlan />
        <Service />

        <div className="component-9">Destination slider</div>
        <Guide />
        <div className="component-11">Reviews-img</div>
        <div className="component-12">Reviews-text</div>
        <div className="component-13">Contact</div>
        <div className="component-14">Footer</div>
    </div>
);

export default HomePage;