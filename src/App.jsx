import Navbar from "./components/navbar"
import Notes from "./components/notes"
import Modal from "./components/modal";
import { useState } from "react";
import NotesProvider from "./context/notesContext";
import AddBtn from "./components/add-btn";

function App() {
  const [currentId, setCurrentId] = useState(1)
 
  const [lang, setLang] = useState('ru');
  
  return (
    <NotesProvider>
      <Navbar lang={lang} setLang={setLang}/>
      <Notes/>
      <Modal/>
      <AddBtn/>
    </NotesProvider> 
  )
}

export default App
