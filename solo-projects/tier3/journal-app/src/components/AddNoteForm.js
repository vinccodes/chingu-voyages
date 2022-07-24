import React from 'react'

const AddNoteForm = (props) =>{
    return(
        <div>
            <form>
                <div className="">
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text"></input>
                </div>
                <div className="">
                    <label htmlFor="body">Body</label>
                    <textarea name="body"></textarea>
                </div>
                <p>Use the form above to create a post. Make sure you fill the required title and body fields and then press submit.</p>
                <button className="" type="submit">Submit</button>
            </form>
        </div>
       
    )
}
export default AddNoteForm