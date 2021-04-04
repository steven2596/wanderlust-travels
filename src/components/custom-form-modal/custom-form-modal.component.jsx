import React from 'react';
import ReactDom from 'react-dom';

import customImg from '../../assets/images/custom-form.jpg';

import './custom-form-modal.styles.scss';

const CustomFormModal = () => {
    return ReactDom.createPortal(
        <>
            <div className="modal__overlay"></div>
            <div className="modal__content">
                <img src={customImg} alt="modal-img" className="content__bg-img" />

                <div className="content__form-container">
                    <div className="content__left">
                        <p className="content__header">
                            <span className="content__heading--1">Get Started</span>
                            <h2 className="content__heading--2">Fill the form to make a custom trip plan</h2>
                        </p>
                        <span className="content__logo"></span>
                    </div>
                    <section className="content__right">
                        <form className="content__form"></form>
                        <footer className="content__footer"></footer>
                    </section>
                </div>
            </div>
        </>,
        document.getElementById('custom-plan')
    )
};

export default CustomFormModal;