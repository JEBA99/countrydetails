import { LOGIN_CREDENTIALS } from "./types.js"
import { COUNTRY_DETAILS } from "./types.js"

export const loginCredentials = (credentials)=> ({
    type: LOGIN_CREDENTIALS,
    payload: credentials
});

export const countryDetails = (countrydetails)=> ({
    type: COUNTRY_DETAILS,
    payload: countrydetails
});

