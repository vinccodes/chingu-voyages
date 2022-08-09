import React from 'react'
import logo from './logo.svg';
import './App.css';
import './styles.css';
import data from './data'
import { Navbar, Notification, AddNoteForm, Note, LoginForm } from './components'
import loginService from './services/loginService'
import noteService from './services/noteService'

function App() {

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [currentUser, setCurrentUser] = React.useState(null)
  const [errorMessage, setErrorMessage] = React.useState(null)

  
  console.log(currentUser)
  console.log('the token is', currentUser.token)

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
  const handleLogin = async(event)=>{

    event.preventDefault()
    // get the username and password from the form
    const username = event.target.username.value
    const password = event.target.password.value

    try {
      // send request to /auth/login
      const user = await loginService.login({username, password})
      // TODO
      noteService.setToken(user.token)
      setCurrentUser(user)
      setUsername('')
      setPassword('')

    }
    catch(err){
      console.log('wrong credentials ', err)
      setErrorMessage('Wrong credentials')
      setTimeout(()=>{
        setErrorMessage(null)
      }, 5000)
    }
    
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
      { errorMessage !== null && 
      <Notification
        message={errorMessage}
        />
      }

      { currentUser === null ?
      <LoginForm 
        username={username}
        password={password}
        handleLogin={handleLogin}
        handleLoginChange={handleLoginChange} />
      :
      <div>
        <p>{currentUser.username} logged in</p>
        <AddNoteForm/>
      </div>
      
      }

      <div className="container__notes">
        {allNotes}
      </div>
      
    </div>
  );
}

export default App;
