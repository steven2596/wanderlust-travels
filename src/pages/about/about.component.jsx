import React from 'react';

import './about.styles.scss';

import { companyFeatures, companyValues } from './about.data';

import AboutFeatureBox from '../../components/about-featurebox/about-featurebox.component';
import WaveTop from '../../components/wave-top/wave-top.component';
import WaveBottom from '../../components/wave-bottom/wave-bottom.component';

const AboutPage = () => {
    return (
        <div className="about">
            <header className="about__header">
                <h3 className="about__heading--1">we are passionate about what we do</h3>
                <h1 className="about__heading--2">
                    Our talented team is commited to bringing our customers the best in value
                    and quality travel arrangements
                </h1>
            </header>

            <WaveTop />
            <section className="about__main">
                <div className="main__header-content">
                    <h2 className="main__heading">
                        Travel Experience You've Never Had Before
                    </h2>
                    <p className="main__text">
                        We are professional, transparent team with more than 10 years of exprience
                        perfecting and optimizing our tours to bring you the memories of your lifetime.
                        Our company specializes in two distinct services - delivering our existing travel packages or
                        developing unique, accurate and tailored plans for customers.
                    </p>
                </div>

                <div className="main__features">
                    {
                        companyFeatures.map(feature => (
                            <AboutFeatureBox key={feature.id} feature={feature} />
                        ))
                    }
                </div>
            </section>
            <WaveBottom />


            <section className="about__values">
                <h2 className="values__heading">Our Company Values</h2>
                <div className="values__features">
                    {
                        companyValues.map(feature => (
                            <AboutFeatureBox key={feature.id} feature={feature} value />
                        ))
                    }
                </div>
            </section>

        </div>

    )
};

export default AboutPage;