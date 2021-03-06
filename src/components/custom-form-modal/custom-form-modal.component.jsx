import React, { useState } from 'react';
import ReactDom from 'react-dom';

import customImg from '../../assets/images/custom-form.jpg';
import FormInput from '../form-input/form-input.component';
import Logo from '../logo/logo.component';
import Button from '../button/button';

import './custom-form-modal.styles.scss';

const CustomFormModal = ({ customModal, setCustomModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setPhone('');
        setComment('');

    }

    return ReactDom.createPortal(
        <div className={`modal ${customModal ? 'modal-active' : ''}`}>
            <div className="modal__overlay"></div>
            <div className="modal__content">
                <img src={customImg} alt="modal-img" className="form-content__bg-img" />

                <div className="form-content__form-container">
                    <div className="form-content__left">
                        <p className="form-content__header-container">
                            <span className="form-content__heading--1">Get Started</span>
                            <span className="form-content__heading--2">Fill the form to make a custom trip plan</span>
                        </p>
                        <div className="form-content__logo">
                            <Logo logoWhite />
                        </div>

                    </div>
                    <section className="form-content__right">
                        <form className="form-content__form" onSubmit={handleSubmit} >
                            <FormInput
                                label="Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <FormInput
                                label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <FormInput
                                label="Phone Number"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                            <div className="form-content__textarea-container" >
                                <textarea
                                    rows="5"
                                    className="form-content__textarea"
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                    placeholder="Comment"
                                />
                                <label
                                    className={`form-content__textarea-label ${comment ? 'shrink-textareaLabel' : ''}`}

                                >
                                    Comment
                                    </label>
                            </div>



                            <Button small round >submit</Button>
                        </form>
                        <footer className="form-content__footer">
                            <span>Tip:</span>
                            <p>Please provide information such as trip duration, places and other details</p>
                        </footer>
                        <span className="form-content__exit-icon" onClick={() => setCustomModal(false)}>&#10006;</span>
                    </section>
                </div>
            </div>
        </div>,
        document.getElementById('custom-plan')
    )
};

export default CustomFormModal;