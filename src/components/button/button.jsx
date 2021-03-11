import React from 'react';

import './button.scss';

const Button = ({ children }) => (
    <div className='button' >
        {children}
    </div>
)

export default Button;