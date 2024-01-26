import { createContext, useEffect, useState } from "react";
import words from '../assets/lang'
const list = [
  {
    id: 1,
    title: "Vue",
    desc: "Lorem ipsum dolor sit amet",
    date: "07.03.2022",
  },
  {
    id: 2,
    title: "React",
    desc: "Lorem ipsum dolor sit amet",
    date: "07.03.2022",
  },
  {
    id: 3,
    title: "Angular",
    desc: "Lorem ipsum dolor sit amet",
    date: "07.03.2022",
  },
];
// export const NotesContext = createContext({
//   notes: [],
//   modal: false,
//   edit: false,
//   editNote: {},
//   search: '',
//   currentId: 1,
//   lang: 'ru',
//   words
// });
export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(list);
  const [modal, setModal] = useState(false);
  const [noteInfo, setNoteInfo] = useState(null);
  const [search, setSearch] = useState('');
  const [currentId, setCurrentId] = useState(0);
  const [lang, setLang] = useState('ru');
  
  useEffect(() => {
    let localNotes = localStorage.getItem('notes');
    localNotes = JSON.parse(localNotes)
    if(Array.isArray(localNotes)) {
      setNotes(localNotes);
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
    const last = notes.length - 1;
    const id = last >= 0 ? notes[last].id : 0;
    setCurrentId(id)
  }, [notes]);

  

  const addNote = (item) => {
    setNotes([...notes, item]);
    setCurrentId(item.id)
  };
  const delNote = (id) => {
    setNotes(notes.filter((elem) => elem.id != id));
  };

  const editNote = (id) => {
    let value = notes.find((note) => note.id == id);
    setModal(true);
    setNoteInfo(value);
  };

  const changeNote = (item) => {
    let elems = notes.map((elem) => {
      if (elem.id == item.id) {
        elem.title = item.title;
        elem.desc = item.desc;
        elem.date = item.date;
      }
      return elem;
    });
    setNotes(elems);
    setNoteInfo(null);
  };

  const closeModal = ()=>{
    setModal(false);
    setNoteInfo(null);
  }
  
  return (
    <NotesContext.Provider
      value={{
        notes,
        delNote,
        editNote,
        modal,
        noteInfo,
        setModal,
        changeNote,
        addNote,
        search,
        setSearch,
        closeModal,
        currentId,
        setCurrentId,
        lang,
        setLang,
        words
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
