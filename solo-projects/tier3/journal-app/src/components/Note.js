import React from 'react'

const Note = (props) =>{
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>
                <a href="#">Edit</a>
                <a href="#">Delete</a>
            </div>
        </div>
    )
}

export default Note