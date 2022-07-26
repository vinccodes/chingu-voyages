import axios from 'axios'

const NOTES_URL = "http://localhost:3000/api/notes"

const getAllNotes = () =>{
    return axios.get(NOTES_URL)
}

// const getUserNotes = (token) =>{
//     return axios.get(NOTES_URL+'notes/')
// }

const createNote = (noteObject) =>{
    return axios.post(NOTES_URL)
}

const updateNote = (noteObject) =>{
    return axios.put(NOTES_URL)
}

const deleteNote = (noteObject) =>{
    return axios.delete(NOTES_URL)
}

export default {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
}