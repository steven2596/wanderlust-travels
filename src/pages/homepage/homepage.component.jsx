import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import CustomPlan from '../../components/custom-plan/custom-plan.component';


const HomePage = () => (
    <div className="homepage">
        {/* <div className="component-1">Menu</div> */}
        <Header />
        <div className="component-3">Feature-img</div>
        <div className="component-4">Feature-text</div>
        <div className="component-5">Package tours</div>
        <CustomPlan />

        <div className="component-8">Reasons</div>
        <div className="component-9">Destination slider</div>
        <div className="component-10">How it works</div>
        <div className="component-11">Reviews-img</div>
        <div className="component-12">Reviews-text</div>
        <div className="component-13">Contact</div>
        <div className="component-14">Footer</div>
    </div>
);

export default HomePage;