/* eslint-disable react/prop-types */
import './modal.css'
function Modal({edit, setModal, changeNote, addNote}) {
  return ( 
    <div className="modal" onClick={()=>setModal(false)}>
      <div className="modal__form" onClick={(e)=>e.stopPropagation()}>
        {/* <h3 className="modal__title">{ edit ? words.titlewindowedit[lang] : words.titlewindow[lang] }</h3> */}
        <h3 className="modal__title">{ edit ? 'Изменить заметку' : 'Добавить заметку' }</h3>
        <div className="modal__content">
          <label>
            <span>Title</span>
            <input type="text"/>
          </label>
          <label>
            <span>Content</span>
            <textarea></textarea>
          </label>
        </div>
        <div className="modal__controls">
          {/* <button className="modal__btn modal__btn_red" onClick={closeModal}>{ words.closebtn[lang] }</button> */}
          <button className="modal__btn modal__btn_red" onClick={()=>setModal(false)}>Отмена</button>
          {/* <button className="modal__btn" onClick={changeNote}>{ words.editwindowbtn[lang] }</button> */}
          <button className="modal__btn" onClick={changeNote}>Изменить</button>
          <button className="modal__btn" onClick={addNote}>Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;