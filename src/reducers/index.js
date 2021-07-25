import { combineReducers } from 'redux';
import LoginCredentials from './modalReducers';

export default combineReducers ({
    logindetails: LoginCredentials,

});