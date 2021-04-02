import { combineReducers } from 'redux';

import tourReducer from './tour-package/tour-package.reducer';

export default combineReducers({
    tour: tourReducer
});