import React from 'react';
import { Route } from 'react-router-dom';

import PackageDirectory from '../package-directory/package-directory.component';
import PackageTour from '../package-tour/package-tour.component';


const Tours = ({ match }) => {
    console.log(match);
    return (
        <div>
            <Route exact path={match.path} component={PackageDirectory} />
            <Route path={`${match.path}/:packageID`} component={PackageTour} />
        </div>
    )
};

export default Tours;