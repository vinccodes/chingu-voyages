import React from 'react'
import '../styles.css' 

const Note = (props) =>{
    return (
        <div className="note__item">
            <h3 className="note__item--title">{props.title}</h3>
            <p className="note__item--body">{props.body}</p>
            <div className="note__item--links__container">
                <div className="link__container--left">
                    <a className="note__item--link note__item--link--edit" href="#">Edit</a>
                </div>
                <div className="link__container--right">
                    <a className="note__item--link note__item--link--delete" href="#">Delete</a>
                </div>
            </div>
        </div>
    )
}

export default Note