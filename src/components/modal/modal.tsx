import './modal.css'
import useNotes from '../../hooks/useNotes';
import { Transition } from '../ui';
import React, { useEffect, useState } from 'react';

function Modal() {
  const {noteInfo, modal, changeNote, addNote, closeModal, currentId, lang, words} = useNotes();
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
  useEffect(()=>{
    if (noteInfo) {
      setInput(noteInfo.title);
      setTextarea(noteInfo.desc)
    } else {
      setInput('');
      setTextarea('')
    }
  }, [modal])

  const addHandle = ()=>{
    let title = input.trim();
    let desc = textarea.trim()
    if (title.length > 0 && desc.length > 0) {
      let item = {
        id: currentId + 1,
        title,
        desc,
        date: new Date().toLocaleDateString()
      }
      addNote(item)
      closeModal()
    }
  }

  const changeHandle = ()=>{
    let title = input.trim();
    let desc = textarea.trim()
    if (title.length > 0 && desc.length > 0 && noteInfo) {
      let item = {
        id: noteInfo.id,
        title,
        desc,
        date: new Date().toLocaleDateString()
      }
      changeNote(item)
      closeModal()
    }
  }

  return ( 
    <Transition showClass={'modal'} hide={!modal} onMouseDown={closeModal}>
      <div className="modal__form" onMouseDown={(e)=>e.stopPropagation()}>
        <h3 className="modal__title">{ noteInfo ? words.titlewindowedit[lang] : words.titlewindow[lang] }</h3>
        {/* <h3 className="modal__title">{ noteInfo ? 'Изменить заметку' : 'Добавить заметку' }</h3> */}
        <div className="modal__content">
          <label>
            <span>Title</span>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          </label>
          <label>
            <span>Content</span>
            <textarea value={textarea} onChange={(e)=>{setTextarea(e.target.value)}}></textarea>
          </label>
        </div>
        <div className="modal__controls">
          <button className="modal__btn modal__btn_red" onClick={closeModal}>{ words.closebtn[lang] }</button>
          {/* <button className="modal__btn modal__btn_red" onClick={closeModal}>Отмена</button> */}
          {noteInfo ? <button className="modal__btn" onClick={changeHandle}>{ words.editwindowbtn[lang] }</button> :
          <button className="modal__btn" onClick={addHandle}>{ words.addbtn[lang] }</button>}
          {/* {noteInfo ? <button className="modal__btn" onClick={changeHandle}>Изменить</button> :
          <button className="modal__btn" onClick={addHandle}>Добавить</button>} */}
        </div>
      </div>
    </Transition>
  );
}

export default Modal;