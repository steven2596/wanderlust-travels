import React from 'react';

import './about.styles.scss';

import { companyFeatures, companyValues } from './about.data';

import Fade from 'react-reveal/Fade';

import AboutFeatureBox from '../../components/about-featurebox/about-featurebox.component';
import WaveTop from '../../components/wave-top/wave-top.component';
import WaveBottom from '../../components/wave-bottom/wave-bottom.component';


const AboutPage = () => {
    return (
        <div className="about">
            <Fade bottom cascade duration={1000} distance="5rem">
                <header className="about__header">
                    <h3 className="about__heading--1">we are passionate about what we do</h3>
                    <h1 className="about__heading--2">
                        Our talented team is commited to bringing our customers the best in value
                        and quality travel arrangements
                    </h1>
                </header>
            </Fade>

            <WaveTop />

            <section className="about__main">
                <Fade bottom duration={1000} distance="5rem">
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
                </Fade>


                <Fade bottom duration={1000} distance="5rem">
                    <div className="main__features">
                        {
                            companyFeatures.map(feature => (
                                <AboutFeatureBox key={feature.id} feature={feature} />
                            ))
                        }
                    </div>
                </Fade>
            </section>

            <WaveBottom />


            <section className="about__values">
                <Fade right duration={1000} distance="5rem" >
                    <h2 className="values__heading">Our Company Values</h2>
                    <div className="values__features">
                        {
                            companyValues.map(feature => (
                                <AboutFeatureBox key={feature.id} feature={feature} value />
                            ))
                        }
                    </div>
                </Fade>
            </section>

        </div>

    )
};

export default AboutPage;