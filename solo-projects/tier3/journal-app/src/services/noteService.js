import axios from 'axios'

const NOTES_URL = "http://localhost:3000/api/notes"

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

const createNote = (noteObject) =>{
    const config = {
        headers: { Authorization: token }
    }
    const response = axios.post(NOTES_URL, noteObject, config)
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