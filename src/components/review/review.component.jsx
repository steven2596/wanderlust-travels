import React, { useState } from 'react';

import './review.styles.scss';
import Fade from 'react-reveal/Fade';

import reviews from './review.data';

const ReviewSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = reviews.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(reviews) || reviews.length <= 0) {
        return null;
    }

    return (

        < div className="review-slider" >

            <figure className="review-slider__arrow review-slider__arrow--next" onClick={nextSlide} >&#8594;</figure>
            <figure className="review-slider__arrow review-slider__arrow--previous" onClick={prevSlide}>&#8592;</figure>

            <Fade bottom duration={1000} >
                <h2 className="review-slider__header">Our Testimonials</h2>
            </Fade>

            {
                reviews.map(({ name, comment, image }, index) => {
                    return (
                        <div className={`review ${index === current ? 'slide-active' : 'slide'}`} key={index}>
                            {
                                index === current && (
                                    <>
                                        <Fade bottom duration={1500} distance="1rem" >
                                            <div className="review__image-container">
                                                <img src={image} alt="image" className="review__image" />
                                            </div>
                                            <div className="review__text">
                                                <p className="review__comment">{comment}</p>
                                                <span className="review__name">{name}</span>
                                            </div>
                                        </Fade>
                                    </>
                                )
                            }
                        </div>
                    )

                }


                )
            }


        </ div >
    )
};

export default ReviewSlider;



