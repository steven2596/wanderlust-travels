import React from 'react';

import './header.style.scss';

import { motion } from 'framer-motion';

import Button from '../button/button';

const containerVariants = {
    start: {
        opacity: 0,
        width: 0
    },

    end: {
        opacity: 1,
        width: '100vw',
        transition: {
            type: 'tween',
            duration: 1.5,
            when: 'beforeChildren',
            staggerChildren: 0.4,
            ease: 'easeInOut'
        }
    },
    exit: {
        x: "-100vw",
        opacity: 0
    }
}

const childVariants = {
    start: {
        y: 50,
        opacity: 0
    },

    end: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 0.7
        }
    }
}

const buttonVariants = {
    start: {
        x: 10,
        opacity: 0
    },

    end: {
        x: 0,
        opacity: 1,
        transition: {

            duration: 0.7,
            ease: 'easeOut'
        }
    }
}



const Header = () => (
    <motion.div
        variants={containerVariants}
        initial="start"
        animate="end"
        className='header' >
        <div className='header__container'>
            <motion.h2 variants={childVariants} className="header__heading header__heading-1">discover</motion.h2>
            <motion.h1 variants={childVariants} className="header__heading header__heading-2">switzerland</motion.h1>
            <Button route="/tours" childVariants={buttonVariants} >Learn more</Button>
        </div>
    </motion.div >
);

export default Header;