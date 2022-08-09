import React from 'react'
import noteService from '../services/noteService'


const AddNoteForm = (props) =>{
    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')

    // event handlers for onChange for FormFields
    const handleFormInput = (event) => {
        // check if event element is title or body
        if (event.target.name === "title") {
            setTitle(event.target.value)
        }
        else if (event.target.name === "body"){
            setBody(event.target.value)
        }
    }

    // send note to server 
    const submitNote = async(event) =>{
        event.preventDefault()
        // get the title and body values from the form
        const title =  event.target.title.value
        const body = event.target.body.value

        // send POST request to server
        try {
            await noteService.createNote({title, body})
        }
        catch(err){
            console.log(err)
        }
    }

    console.log('title: ', title)
    console.log('body: ',body)
    return(
        <div className="addNoteForm__container">
            <form className="addNoteForm" method="POST" onSubmit={submitNote}>
                <div className="form__group">
                    <label className="form__label" htmlFor="title">Title:</label>
                    <input className="form__field" 
                        name="title" 
                        type="text"
                        onChange={handleFormInput}
                        value={title}></input>
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="body">Body:</label>
                    <textarea className="form__field" 
                    name="body"
                    onChange={handleFormInput}
                    value={body}></textarea>
                </div>
                <p className="addNoteForm__description">Use the form above to create a post. Make sure you fill the required title and body fields and then press submit.</p>
                <button className="form__btn btn__submit" type="submit">Submit</button>
            </form>
        </div>
       
    )
}
export default AddNoteForm