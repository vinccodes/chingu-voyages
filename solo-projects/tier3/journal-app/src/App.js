import logo from './logo.svg';
import './App.css';
import data from './data'
import {Navbar, AddNoteForm, Note} from './components'

function App() {

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
        <Navbar logo="Digital Journal" subtitle="| Create a Note"/>
      </header>
      <AddNoteForm/>
      <div>
        {allNotes}
      </div>
    </div>
  );
}

export default App;
