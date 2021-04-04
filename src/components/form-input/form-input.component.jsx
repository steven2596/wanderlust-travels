import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, ...others }) => {
    return (
        <div className="input__group">
            <input className="form__input" {...others} placeholder={label} />
            {
                label ?
                    <label className={`form__label ${others.value.length ? 'shrink-label' : ''}`}>{label}</label> : null
            }
        </div>
    )
};

export default FormInput;