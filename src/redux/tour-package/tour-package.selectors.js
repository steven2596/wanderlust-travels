import { createSelector } from 'reselect';

const TourID = {
    package1: 1,
    package2: 2,
    package3: 3
};

const selectTour = state => state.tour;

export const selectTourPackages = createSelector(
    [selectTour],
    tour => tour.packages
);

export const selectTourPackage = (PackageUrl) => (
    createSelector(
        [selectTourPackages],
        packages => packages.find(packageTour => packageTour.id === TourID[PackageUrl])
    )
);