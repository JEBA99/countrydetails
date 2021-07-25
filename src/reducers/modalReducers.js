import { LOGIN_CREDENTIALS } from "../actions/types.js"
import { COUNTRY_DETAILS } from "../actions/types.js";

const INITIAL_STATE =
{
    credentials: {
        "username":"jebakumarns@gmail.com",
        "password" :'jebakumar123' 
    }
}

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case LOGIN_CREDENTIALS :
            return { ...state, credentials: action.payload };
        case COUNTRY_DETAILS :
            return { ...state, countrydetails: action.payload};
        default:
            return state;
    }
}