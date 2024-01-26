import Navbar from "./components/navbar"
import Notes from "./components/notes"
import Modal from "./components/modal";
import NotesProvider from "./context/notesContext";
import AddBtn from "./components/add-btn";

function App() {
  
  return (
    <NotesProvider>
      <Navbar/>
      <Notes/>
      <Modal/>
      <AddBtn/>
    </NotesProvider> 
  )
}

export default App
