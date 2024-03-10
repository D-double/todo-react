import React from "react";
import { useState } from "react";
import NoteItem from "./notes-item";
import './notes.css'
import { listImg, gridImg } from "../../assets/images";
import useNotes from "../../hooks/useNotes";

function Notes() {
  const [grid, setGrid] = useState(true)
  const {notes, search, lang, words} = useNotes();
  const list = notes.filter(val => {
    let result = val.title.concat(val.desc).toLowerCase().includes(search.toLowerCase())
    return result;
  });
  return ( 
    <div className="notes">
    <div className="container">
      <div className="notes__top">
        {/* <h2 className="notes__title"> { list.length > 0 ? 'Все заметки' : 'Нет заметок' }</h2> */}
        <h2 className="notes__title"> { notes.length > 0 ? words.infobar[lang] : words.noinfobar[lang] }</h2>
        <button className="notes__btn" onClick={()=>{setGrid(!grid)}}>
          { grid ? <img src={listImg} alt=""/> : <img src={gridImg} alt=""/>}
          <span>{ grid ? words.list[lang] : words.grid[lang] }</span>
          {/* <span>{ grid ? 'Список' : 'Сетка' }</span> */}
        </button>
      </div>
      <div className={grid ? "notes__list" : "notes__list active"} >
        {
          list.map((note)=>{
            return <NoteItem grid={grid} key={note.id} note={note}/>
          })          
        }
      </div>
    </div>
  </div>
 );
}

export default Notes;