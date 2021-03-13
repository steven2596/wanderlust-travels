import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import CustomPlan from '../../components/custom-plan/custom-plan.component';
import FeatureImg from '../../components/feature-img/feature-img.component';
import FeatureContent from '../../components/feature-content/feature-content.component';

import Service from '../../components/service-section/service-section.component';
import Guide from '../../components/guide/guide.component';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';
import PackageSection from '../../components/package-section/package-section.component';
import ReviewSlider from '../../components/review/review.component';
import DestinationSlider from '../../components/destination-slider/destination-slider.component';


const HomePage = () => (
    <div className="homepage">
        {/* <div className="component-1">Menu</div> */}
        <Header />
        <FeatureImg />
        <FeatureContent />
        <PackageSection />
        <CustomPlan />
        <Service />

        <DestinationSlider />
        <Guide />
        <ReviewSlider />
        <Contact />
        <Footer />
    </div>
);

export default HomePage;