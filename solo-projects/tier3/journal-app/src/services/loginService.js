import axios from 'axios'
const LOGIN_URI = process.env.REACT_APP_BASE_URL_LOCAL + '/auth/login'

const login = (userCredentials) =>{
    // send http post request to /auth/login 
    return axios.post(LOGIN_URI, userCredentials)
}

export default {
    login
}