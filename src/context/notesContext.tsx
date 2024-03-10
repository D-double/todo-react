import React, { createContext, useEffect, useState } from "react";
import words, { ILang } from '../assets/lang'
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

export interface INote {
  id: number;
  title: string;
  desc: string;
  date: string;
}

export enum LangType {
  ru = 'ru',
  uz = 'uz'
}

interface INotesContext {
  notes: INote[];
  delNote: (id: number)=>void;
  editNote: (id: number)=>void;
  modal: boolean;
  noteInfo: INote | null;
  changeNote: (item: INote)=>void;
  addNote: (item: INote)=>void;
  search: string;
  setSearch: (search: string)=>void;
  closeModal: ()=>void;
  setModal: (val: boolean)=>void;
  currentId: number;
  setCurrentId: (id: number)=>void;
  lang: LangType;
  setLang: (type: LangType) => void;
  words: ILang;
}
export const NotesContext = createContext<INotesContext | null>(null);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState<INote[]>(list);
  const [modal, setModal] = useState<boolean>(false);
  const [noteInfo, setNoteInfo] = useState<INote | null>(null);
  const [search, setSearch] = useState<string>('');
  const [currentId, setCurrentId] = useState<number>(0);
  const [lang, setLang] = useState<LangType>(LangType.ru);
  
  useEffect(() => {
    let localNotes = localStorage.getItem('notes');
    localNotes = localNotes ? JSON.parse(localNotes) : null;
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

  

  const addNote = (item: INote) => {
    setNotes([...notes, item]);
    setCurrentId(item.id)
  };
  const delNote = (id: number): void => {
    setNotes(notes.filter((elem) => elem.id != id));
  };

  const editNote = (id:number ) => {
    let value = notes.find((note) => note.id == id);
    if (value) {
      setModal(true);
      setNoteInfo(value);      
    }
  };

  const changeNote = (item: INote) => {
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
