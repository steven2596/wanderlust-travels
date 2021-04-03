import React, { useState } from 'react';

import './accordion.styles.scss';

const Accordion = ({ faq }) => {
    const [hideAnswer, setHideAnswer] = useState(false);

    const { question, answer } = faq;

    return (
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
    )
};

export default Accordion;