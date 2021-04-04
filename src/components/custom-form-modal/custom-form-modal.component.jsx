import React, { useState } from 'react';
import ReactDom from 'react-dom';

import customImg from '../../assets/images/custom-form.jpg';
import FormInput from '../form-input/form-input.component';
import Logo from '../logo/logo.component';
import Button from '../button/button';

import './custom-form-modal.styles.scss';

const CustomFormModal = ({ setCustomModal }) => {
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
        <>
            <div className="modal__overlay"></div>
            <div className="modal__content">
                <img src={customImg} alt="modal-img" className="content__bg-img" />

                <div className="content__form-container">
                    <div className="content__left">
                        <p className="content__header-container">
                            <span className="content__heading--1">Get Started</span>
                            <span className="content__heading--2">Fill the form to make a custom trip plan</span>
                        </p>
                        <div className="content__logo">
                            <Logo logoWhite />
                        </div>

                    </div>
                    <section className="content__right">
                        <form className="content__form" onSubmit={handleSubmit} >
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
                            <div className="content__textarea-container" >
                                <textarea
                                    rows="5"
                                    className="content__textarea"
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                    placeholder="Comment"
                                />
                                <label
                                    className={`content__textarea-label ${comment ? 'shrink-textareaLabel' : ''}`}

                                >
                                    Comment
                                    </label>
                            </div>



                            <Button small round >submit</Button>
                        </form>
                        <footer className="content__footer">
                            <span>Tip:</span>
                            <p>Please provide information such as trip duration, places and other details</p>
                        </footer>
                        <span className="content__exit-icon" onClick={() => setCustomModal(false)}>&#10006;</span>
                    </section>
                </div>
            </div>
        </>,
        document.getElementById('custom-plan')
    )
};

export default CustomFormModal;