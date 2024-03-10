import './navbar.css'
import { Transition } from '../ui'
import React, { useEffect, useRef, useState } from 'react';
import { searchImg, backImg, clearImg } from '../../assets/images';
import useNotes from '../../hooks/useNotes';
import { LangType } from '../../context/notesContext';

const Navbar = ()=>{
  const [hide, setHide] = useState(true);
  const { search, setSearch, lang, setLang, words } = useNotes();
  const handleHide = ()=>{
    setHide(!hide);
    if(!hide){
      setSearch('')
    }
  }
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  // Добавить в JS
  const handleClose = ()=>{
    if (inputSearch.current) {
      inputSearch.current.focus();       
    }
    setSearch('')
  }
  const inputSearch = useRef<HTMLInputElement | null>(null);
  useEffect(()=>{
    if (!hide && inputSearch.current) {
      inputSearch.current.focus();      
    }
  }, [hide])
  
  return (
    <header className="header">
    <Transition showClass="header__content" hide={!hide}>
      <>
        { 
          lang == 'ru' ? 
          <button className="header__lang" onClick={()=>setLang(LangType.uz)}>UZ</button> :
          <button className="header__lang" onClick={()=>setLang(LangType.ru)}>RU</button>
        }
        <h1 className="header__title">{words.appbartitle[lang]}</h1>
        {/* <h1 className="header__title">заметки</h1> */}
        <button className="header__search" onClick={handleHide}>
          <img src={searchImg} alt=""/>
        </button>
      </>
    </Transition>
    <Transition showClass="header__form" hide={hide}>
      <>
        <button className="header__back" onClick={handleHide}>
          <img src={backImg} alt=""/>
        </button>
        {/* <input ref={inputSearch} type="text" value={search} className="header__input container" placeholder="Поиск..." onChange={handleSearch}/> */}
        <input ref={inputSearch} type="text" value={search} className="header__input container" placeholder={words.appbarseacrch[lang]} onChange={handleSearch}/>
        <button className="header__close" onClick={handleClose}>
          <img src={clearImg} alt=""/>
        </button>
      </>
    </Transition>
  </header>
  )
}

export default Navbar