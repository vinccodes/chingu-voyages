import React from 'react'
import logo from './logo.svg';
import './App.css';
import './styles.css';
import data from './data'
import {Navbar, AddNoteForm, Note} from './components'

function App() {

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  
  const handleLoginChange = (event)=>{
    if (event.target.username === "username") {
      setUsername(event.target.value)
    }
    else if (event.target.password === "password") {
      setPassword(event.target.value)
    }
  }

  console.log('username', username)
  console.log('password', password)

  // Login handler
  const handleLogin = (event)=>{

    event.preventDefault()
    // get the username and password from the form
    const username = event.target.username.value
    const password = event.target.password.value

    console.log('handleLogin username:', username)
    console.log('handleLogin password:', password)
  }



  // Map all Note objects retrieved from the server to JSX Note elements
  const allNotes = data.map(note =>{
    return(
      <Note 
          key={note.id}
          title={note.title}
          body={note.body}
        />
    )
  })
  return (
    <div className="App">
      <header>
        <Navbar logo="Digital Journal" subtitle=" | Create a Note"/>
      </header>

      <div className="container__login">
        <form className="login__form" method="POST" onSubmit={handleLogin}>
          <div className="form__group">
            <label className="form__label" htmlFor="username">Username:</label>
            <input className="form__field" 
              type="text"
              name="username" 
              value={username}
              onChange={handleLoginChange}></input>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">Password:</label>
            <input className="form__field" 
              type="password" 
              name="password"
              value={password}
              onChange={handleLoginChange}></input>
          </div>
          <button className="form__btn btn__submit" type="submit">Submit</button>
        </form>
      </div>

      <AddNoteForm/>
      <div className="container__notes">
        {allNotes}
      </div>
    </div>
  );
}

export default App;
