import React from 'react';

import './button.scss';

const Button = ({ children, small, round, ...otherProps }) => (
    <button
        className={`
    ${small ? 'button-small' : ''}
    ${round ? 'button-round' : ''} 
    button`} {...otherProps}>
        {children}
    </button>
)

export default Button;
