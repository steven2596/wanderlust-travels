import React from 'react';

import './faq.styles.scss';

import faqData from './faq.data';
import faqImg from '../../assets/images/faq.jpg';

import Accordion from '../../components/accordion/accordion.component';

const FaQs = () => {
    return (
        <section className="faqs">
            <header className="faqs__header">
                <h1 className="faqs__heading">Frequently Asked Questions</h1>
            </header>

            <div className="faqs__container">
                {
                    faqData.map(faq => <Accordion key={faq.id} faq={faq} />)
                }
            </div>
        </section>
    )
};

export default FaQs;
