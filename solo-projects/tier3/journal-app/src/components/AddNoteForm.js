import React from 'react'

const AddNoteForm = (props) =>{
    return(
        <div className="addNoteForm__container">
            <form className="addNoteForm">
                <div className="form__group">
                    <label className="form__label" htmlFor="title">Title:</label>
                    <input className="form__field" name="title" type="text"></input>
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="body">Body:</label>
                    <textarea className="form__field"name="body"></textarea>
                </div>
                <p className="addNoteForm__description">Use the form above to create a post. Make sure you fill the required title and body fields and then press submit.</p>
                <button className="form__btn btn__submit" type="submit">Submit</button>
            </form>
        </div>
       
    )
}
export default AddNoteForm