import Navbar from "./components/navbar"
import Notes from "./components/notes"
import Modal from "./components/modal";
import { useState } from "react";

function App() {
  const notes = [
    { id: 1, title: 'Vue', desc: 'Lorem ipsum dolor sit amet', date: '07.03.2022'},
    { id: 2, title: 'React', desc: 'Lorem ipsum dolor sit amet', date: '07.03.2022'},
    { id: 3, title: 'Angular', desc: 'Lorem ipsum dolor sit amet', date: '07.03.2022'},
  ];
  const [modal, setModal] = useState(false)

  return (
    <>
      <Navbar/>
      <Notes notes={notes}/>
      {modal && <Modal setModal={setModal}/>}
      <button className="add" onClick={()=>setModal(true)}>
        <img src="../assets/img/edit.svg" alt=""/>
      </button>
    </>
  )
}

export default App
