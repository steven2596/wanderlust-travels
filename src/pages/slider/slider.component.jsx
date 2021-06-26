import React, { useState, useEffect } from 'react';
import './slider.scss';
import destinations from './destinations.data';
import Button from '../../components/button/button';

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log(index)
    }, [index])

    const nextSlide = () => {
        setIndex(index === 5 ? 0 : index + 1)
    }

    const prevSlide = () => {
        setIndex(index === 0 ? 5 : index - 1)
    }

    return (
        <div className="slider">
            <div className="slider-window">
                <div
                    style={{ transform: `translateX(-${index * 50}rem)` }}
                    className="container" >
                    <div className='box box--1'>Box 1</div>
                    <div className='box box--2'>Box 2</div>
                    <div className='box box--3'>Box 3</div>
                    <div className='box box--4'>Box 4</div>
                    <div className='box box--5'>Box 5</div>
                    <div className='box box--6'>Box 6</div>
                </div>
            </div>
            <div className='btn-group'>
                <button onClick={prevSlide} className="prev-btn">Prev</button>
                <button onClick={nextSlide} className="next-btn">Next</button>
            </div>

        </div>

    )
};

export default Slider;