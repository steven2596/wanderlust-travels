import React from 'react';

import './button.scss';

const Button = ({ children, small }) => (
    <div className={`${small ? 'button-small' : ''} button`} >
        {children}
    </div>
)

export default Button;