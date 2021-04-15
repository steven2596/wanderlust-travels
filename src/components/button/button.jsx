import React from 'react';

import { motion } from 'framer-motion';

import './button.scss';

const Button = ({ children, small, round, route, childVariants, ...otherProps }) => (
    <motion.a
        variants={childVariants}
        href={route ? route : null}
        className={`
    ${small ? 'button-small' : ''}
    ${round ? 'button-round' : ''} 
    button`} {...otherProps}>
        {children}
    </motion.a>
)

export default Button;
