import React from 'react';

import './button.scss';

const Button = ({ children, small, round, route, ...otherProps }) => (
    <a
        href={route ? route : null}
        className={`
    ${small ? 'button-small' : ''}
    ${round ? 'button-round' : ''} 
    button`} {...otherProps}>
        {children}
    </a>
)

export default Button;
