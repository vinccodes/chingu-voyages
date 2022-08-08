import axios from 'axios'
const LOGIN_URI = process.env.REACT_APP_BASE_URL_LOCAL + '/auth/login'

const login = (config) =>{
    // send http post request to /auth/login 
    return axios.post(LOGIN_URI, config)
}

export default {
    login
}