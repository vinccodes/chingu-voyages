import React from 'react'
import logo from './logo.svg';
import './App.css';
import './styles.css';
import data from './data'
import {Navbar, AddNoteForm, Note, LoginForm } from './components'

function App() {

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  
  const handleLoginChange = (event)=>{
    console.log(event.target)
    if (event.target.name === "username") {
      setUsername(event.target.value)
    }
    else if (event.target.name === "password") {
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

    // send request to /auth/login
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

      <LoginForm 
        username={username}
        password={password}
        handleLogin={handleLogin}
        handleLoginChange={handleLoginChange} />

      <AddNoteForm/>
      <div className="container__notes">
        {allNotes}
      </div>
    </div>
  );
}

export default App;
