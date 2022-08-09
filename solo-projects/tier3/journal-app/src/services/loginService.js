import axios from 'axios'
const LOGIN_URI = process.env.REACT_APP_BASE_URL_LOCAL + '/auth/login'

const login = async (userCredentials) =>{
    // send http post request to /auth/login 
    const response = await  axios.post(LOGIN_URI, userCredentials)
    return response.data
}

export default {
    login
}