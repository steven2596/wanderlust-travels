import React from 'react'

import './package-directory.styles.scss';

import headerImg from '../../assets/images/header-2.jpg';
import storyImg from '../../assets/images/directory-story.jpg';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';


const PackageDirectory = () => {
    return (
        <div>
            <header className="directory__header" >
                <p className="directory__heading directory__heading--1">A Heaven on Earth</p>
                <p className="directory__heading directory__heading--2">Just <span>For You</span></p>
            </header>

            <div className="directory__img-container">
                <img src={headerImg} alt="header-img" className="directory__image" />
            </div>

            <div className="directory__story" >
                <h1 className="directory__story-header">Discover switzerland with us</h1>

                <div className="directory__story-imgContainer">
                    <img src={storyImg} alt="story-img" className="directory__story-image" />
                    <div className="directory__story-background"></div>
                </div>

                <div className="directory__content">
                    <h4 className="directory__content-header">Excellent Tours</h4>
                    <p className="directory__content-text">
                        All our tour packages are carefully planned so you don't have to.
                        Choose the one that suits you the most. Travelling's just got easier!
                    </p>
                </div>

            </div>

            <h2 className="directory__menu-header">Tour Packages</h2>
            <DirectoryMenu />

        </div>
    )
}

export default PackageDirectory;
