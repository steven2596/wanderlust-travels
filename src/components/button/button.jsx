import React from 'react';

import './button.scss';

const Button = ({ children, small, ...otherProps }) => (
    <div className={`${small ? 'button-small' : ''} button`} {...otherProps}>
        {children}
    </div>
)

export default Button;
