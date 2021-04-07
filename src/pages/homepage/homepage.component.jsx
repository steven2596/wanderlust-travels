import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import CustomPlan from '../../components/custom-plan/custom-plan.component';
import FeatureImg from '../../components/feature-img/feature-img.component';
import FeatureContent from '../../components/feature-content/feature-content.component';

import Service from '../../components/service-section/service-section.component';
import Guide from '../../components/guide/guide.component';
import Contact from '../../components/contact/contact.component';

import PackageSection from '../../components/package-section/package-section.component';
import ReviewSlider from '../../components/review/review.component';
import DestinationSlider from '../../components/destination-slider/destination-slider.component';
import Newsletter from '../../components/newsletter/newsletter.component';
import WaveTop from '../../components/wave-top/wave-top.component';
import WaveBottom from '../../components/wave-bottom/wave-bottom.component';




const HomePage = () => (
    <div className="homepage">

        <Header />
        <WaveTop full home />

        <FeatureImg />
        <FeatureContent />
        <PackageSection />
        <CustomPlan />
        <Service />
        <DestinationSlider />

        <WaveTop full />
        <Guide />
        <WaveBottom full />

        <ReviewSlider />
        <Contact />
        <Newsletter />

    </div>
);

export default HomePage;