import React from 'react';

import './package-tour.styles.scss';

import { connect } from 'react-redux';
import { selectTourPackage } from '../../redux/tour-package/tour-package.selectors';



const PackageTour = ({ packageTour }) => {

    const { id, title, destinations, image } = packageTour;
    return (
        <div className='tour'>
            <section className='tour__package' >
                <h2 className="tour__header">Package {title}</h2>
                <div className="tour__img-container">
                    <img src={image} alt="tour-image" className="tour__img" />
                </div>

                <div className="tour__content">
                    <h4 className="content__header">Itinerary</h4>
                    <div className="content__destinations">
                        {
                            destinations.map((destination, index) => (
                                <p className="content__item">
                                    <span className="content__day">Day {index + 1}</span>
                                    <span className="content__name">{destination}</span>
                                </p>
                            ))
                        }
                    </div>
                    <p className="content__text">This package includes:</p>
                    <ul className="content__details">
                        <li className="content__detail"><span>&#8594;</span> Visa Application</li>
                        <li className="content__detail"><span>&#8594;</span> Flight Booking</li>
                        <li className="content__detail"><span>&#8594;</span> Flight Ticket & Visa Fees Included</li>
                        <li className="content__detail"><span>&#8594;</span> Four-star Hotels and Inns</li>
                        <li className="content__detail"><span>&#8594;</span> All Meals</li>
                        <li className="content__detail"><span>&#8594;</span> Free SIM Card(5GB Data + 150mins)</li>
                    </ul>
                </div>

            </section>


        </div>
    )
};

//packageID = package1, package2,etc
const mapStateToProps = (state, ownProps) => ({
    packageTour: selectTourPackage(ownProps.match.params.packageID)(state)
})

export default connect(mapStateToProps)(PackageTour);