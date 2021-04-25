import React from 'react';

import Fade from 'react-reveal/Fade';

import { motion } from 'framer-motion';

import { faqHeaderVariants, childVariants } from '../../animations/variants';

import './faq.styles.scss';

import faqData from './faq.data';


import Accordion from '../../components/accordion/accordion.component';

const FaQs = () => {
    return (
        <section className="faqs">
            <motion.header
                variants={faqHeaderVariants}
                initial="start"
                animate="end"
                className="faqs__header"
            >
                <h1
                    className="faqs__heading"
                >
                    Frequently Asked Questions
                </h1>
            </motion.header>
            <Fade duration={1000} delay={500}>
                <div className="faqs__container">

                    {

                        faqData.map(faq => (

                            <Accordion key={faq.id} faq={faq} />

                        ))

                    }

                </div>
            </Fade>

        </section>
    )
};

export default FaQs;
