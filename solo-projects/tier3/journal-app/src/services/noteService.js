import axios from 'axios'

const NOTES_URL = process.env.REACT_APP_BASE_URL_LOCAL+"/api/notes"

let token = null


const setToken = newToken =>{
    token = `bearer ${newToken}`
}

const getAllNotes = () =>{
    return axios.get(NOTES_URL)
}

// const getUserNotes = (token) =>{
//     return axios.get(NOTES_URL+'notes/')
// }

const createNote = async(noteObject) =>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(NOTES_URL, noteObject, config)
    return response.data
}

const updateNote = (noteObject) =>{
    return axios.put(NOTES_URL)
}

const deleteNote = (noteObject) =>{
    return axios.delete(NOTES_URL)
}

export default {
    setToken,
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
}

