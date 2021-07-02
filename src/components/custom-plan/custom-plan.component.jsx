import React, { useState } from 'react';
import Button from '../button/button';
import CustomFormModal from '../custom-form-modal/custom-form-modal.component';
import Fade from 'react-reveal/Fade';
import './custom-plan.styles.scss';

const CustomPlan = () => {
    const [customModal, setCustomModal] = useState(false);

    return (
        <div className="custom-plan">
            <Fade bottom duration={1000} distance="5rem">
                <div className="custom-plan__content">
                    <h2 className="custom-plan__heading">Custom Plan</h2>
                    <p className="custom-plan__text">
                        All of our package tours are excellent. But if you have something
                        in mind, drop us an email to make a custom plan which is tailored
                        to your preferences and needs.
                    </p>
                    <Button onClick={() => setCustomModal(true)} >Contact Now</Button>
                </div>
            </Fade>
            <Fade bottom duration={1000} distance="5rem">
                <div className="custom-plan__img">
                    <div className="custom-plan__picture"></div>
                    <div className="custom-plan__back"></div>
                </div>
            </Fade>

            <CustomFormModal
                customModal={customModal}
                setCustomModal={setCustomModal}
            />

        </div>
    )

};

export default CustomPlan;