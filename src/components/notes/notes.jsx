/* eslint-disable react/prop-types */
import { useState } from "react";
import NoteItem from "./notes-item";
import './notes.css'

function Notes({delNote, changeNote, notes}) {
  const [grid, setGrid] = useState(false)
  console.log(notes);
  return ( 
    <div className="notes">
    <div className="container">
      <div className="notes__top">
        <h2 className="notes__title"> { notes.length > 0 ? 'Все заметки' : 'Нет заметок' }</h2>
        {/* <h2 className="notes__title"> { notes.length > 0 ? words.infobar[lang] : words.noinfobar[lang] }</h2> */}
        <button className="notes__btn" onClick={()=>{setGrid(!grid)}}>
          <img src="@/assets/img/list.svg" alt=""/>
          <img src="@/assets/img/grid.svg" alt=""/>
          {/* <span>{ grid ? words.list[lang] : words.grid[lang] }</span> */}
          <span>{ grid ? 'Список' : 'Сетка' }</span>
        </button>
      </div>
      <div className={grid ? "notes__list" : "notes__list active"} >
        {
          notes.map((note)=>{
            return <NoteItem grid={grid} key={note.id} note={note} delNote={delNote}              changeNote={changeNote}/>
          })          
        }
      </div>
    </div>
  </div>
 );
}

export default Notes;