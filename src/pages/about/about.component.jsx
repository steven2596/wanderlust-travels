import React from 'react';

import './about.styles.scss';

import { companyFeatures, companyValues } from './about.data';

import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

import AboutFeatureBox from '../../components/about-featurebox/about-featurebox.component';
import WaveTop from '../../components/wave-top/wave-top.component';
import WaveBottom from '../../components/wave-bottom/wave-bottom.component';

const containerVariants = {
    start: {
        opacity: 0,
    },

    end: {
        opacity: 1,
        transition: {
            duration: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    }
}

const revealVariants = {
    start: {
        opacity: 0,
        y: 100
    },

    end: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeOut'
        }
    }
}

const AboutPage = () => {
    return (
        <div className="about">
            <motion.header
                variants={containerVariants}
                initial="start"
                animate="end"
                className="about__header">
                <motion.h3 variants={revealVariants} className="about__heading--1">we are passionate about what we do</motion.h3>
                <motion.h1 variants={revealVariants} className="about__heading--2">
                    Our talented team is commited to bringing our customers the best in value
                    and quality travel arrangements
                </motion.h1>
            </motion.header>

            <WaveTop />

            <section className="about__main">
                <Fade bottom cascade>
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


                <Fade bottom>
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
                <Fade left >
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