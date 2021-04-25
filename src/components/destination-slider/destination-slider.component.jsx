import React, { useState } from 'react';

import './destination-slider.styles.scss';

import Fade from 'react-reveal/Fade';

import destinations from './destinations.data';

const DestinationSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = destinations.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(destinations) || destinations.length <= 0) {
        return null;
    }

    return (
        <Fade bottom duration={1000} distance="5rem">
            <div className="destination-slider" >
                <figure className="destination-slider__arrow destination-slider__arrow--next" onClick={nextSlide} >&#8594;</figure>
                <figure className="destination-slider__arrow destination-slider__arrow--previous" onClick={prevSlide}>&#8592;</figure>
                <h2 className="destination-slider__header">Top Destinations</h2>
                {
                    destinations.map(({ city, about, image }, index) => (
                        <div className={`destination ${index === current ? 'slide-animation' : 'slide-normal'}`} key={index}>
                            {
                                index === current && (
                                    <>
                                        <div className="destination__image-container">
                                            <img src={image} alt="city-image" className="destination__image" />
                                            <div className="destination__content">
                                                <h2 className="destination__name">{city}</h2>
                                                <p className="destination__text">{about}</p>
                                            </div>
                                        </div>

                                    </>
                                )

                            }
                        </div>
                    )
                    )
                }
            </div>
        </Fade>
    )
};

export default DestinationSlider;