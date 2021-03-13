import React, { useState } from 'react'

import './review.styles.scss';

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

    console.log(current);

    if (!Array.isArray(reviews) || reviews.length <= 0) {
        return null;
    }

    return (

        < div className="review-slider" >
            <figure className="review-slider__arrow review-slider__arrow--next" onClick={nextSlide} >&#8594;</figure>
            <figure className="review-slider__arrow review-slider__arrow--previous" onClick={prevSlide}>&#8592;</figure>

            <h2 className="review-slider__header">Reviews</h2>

            {
                reviews.map(({ name, comment, image }, index) => {
                    return (
                        <div className={`review ${index === current ? 'slide-active' : 'slide'}`} key={index}>
                            {
                                index === current && (
                                    <>
                                        <div className="review__image-container">
                                            <img src={image} alt="image" className="review__image" />
                                        </div>
                                        <div className="review__text">
                                            <p className="review__comment">{comment}</p>
                                            <span className="review__name">{name}</span>
                                        </div>
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



