import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';

import './accordion.styles.scss';

const Accordion = ({ faq }) => {
    const [hideAnswer, setHideAnswer] = useState(false);

    const { question, answer } = faq;

    return (
        <Fade left duration={1000} distance="5rem">
            <div className="accordion">
                <label className="accordion__container" onClick={() => setHideAnswer(!hideAnswer)}>
                    <input type="checkbox" className="accordion__checkbox" />
                    <div className="accordion__question-container" >
                        <h2 className="accordion__question">{question}</h2>
                        <span className="accordion__arrow-icon" >&#10148;</span>
                    </div>

                    <p
                        className="accordion__answer">{answer}</p>
                </label>
            </div>
        </Fade>

    )
};

export default Accordion;