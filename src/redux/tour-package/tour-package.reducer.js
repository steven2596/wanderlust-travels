import TOUR_DATA from './tour-package.data.js';

const INITIAL_STATE = {
    packages: TOUR_DATA
};

const tourReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default tourReducer;